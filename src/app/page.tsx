
import {Session} from 'next-auth';
import {getServerSession} from 'next-auth/next';
import {authOptions} from '@/lib/auth';
import {Button} from '@/components/ui/button';
import {signIn, signOut} from 'next-auth/react';

async function getSession() {
  return await getServerSession(authOptions);
}

export default async function Home() {
  const session = await getSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">VibeCraft Studio</h1>

      {session ? (
        <>
          <p className="text-lg mb-4">
            Welcome, {session?.user?.name ?? 'User'}!
          </p>
          <Button onClick={() => signOut()}>Sign out</Button>
          {/* Placeholder for User Dashboard */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-2">Your Mood Boards</h2>
            <p>No mood boards yet. Start creating one!</p>
            <Button>Generate New Mood Board</Button>
          </div>
        </>
      ) : (
        <>
          <p className="text-lg mb-4">
            Define your brand's visual identity.
          </p>
          <Button className="mr-2" onClick={() => signIn('google')}>
            Sign in with Google
          </Button>
          {/* Placeholder for Email/Password Signup */}
          <Button variant="secondary">
            Sign up with Email
          </Button>
        </>
      )}
    </div>
  );
}

