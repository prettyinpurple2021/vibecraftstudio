/ src/app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
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
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({message: 'Missing email or password'}, {status: 400});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const auth = getAuth();
    const userRecord = await auth.createUser({
      email: email,
      password: hashedPassword,
    });

    console.log('Successfully created new user:', userRecord.uid);
    return NextResponse.json({message: 'User created successfully'}, {status: 201});
  } catch (error: any) {
    console.error('Error creating user:', error);
    return NextResponse.json({message: error.message || 'Failed to create user'}, {status: 500});
  }
}
