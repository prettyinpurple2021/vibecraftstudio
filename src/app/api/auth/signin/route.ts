/ src/app/api/auth/signin/route.ts
import {NextRequest, NextResponse} from 'next/server';
import {getAuth} from 'firebase-admin/auth';
import {initializeApp, getApps, cert} from 'firebase-admin/app';
import bcrypt from 'bcryptjs';

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '{}'
);

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

export async function POST(req: NextRequest) {
  try {
    const {email, password} = await req.json();

    if (!email || !password) {
      return NextResponse.json({message: 'Missing email or password'}, {status: 400});
    }

    const auth = getAuth();
    const userRecord = await auth.getUserByEmail(email);

    const passwordMatch = await bcrypt.compare(password, userRecord.passwordHash || '');

    if (!passwordMatch) {
      return NextResponse.json({message: 'Invalid credentials'}, {status: 401});
    }

    // Sign in the user and create session token
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
    const sessionCookie = await auth.createSessionCookie(userRecord.uid, {expiresIn});
    const options = {
      name: 'session',
      value: sessionCookie,
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: expiresIn / 1000,
    };

    return NextResponse.json({message: 'Signin successful'}, {status: 200, headers: { 'Set-Cookie': `${options.name}=${options.value}; HttpOnly; Secure; Path=/; Max-Age=${options.maxAge}`}});
  } catch (error: any) {
    console.error('Error signing in user:', error);
    return NextResponse.json({message: error.message || 'Failed to signin'}, {status: 500});
  }
}
