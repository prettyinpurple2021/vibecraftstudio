'use client';

import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useSession} from "next-auth/react";
import {useState} from "react";
import { signIn, signOut } from './actions';
import Image from 'next/image';

export default function Home() {
  const {data: session} = useSession();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Image
        src="/vibe_craft_logo.png" // Path to your image in the public directory
        alt="VibeCraft Studio Logo"
        width={200} // Adjust the width as needed
        height={200} // Adjust the height as needed
        className="mb-8"
      />

      {session ? (
        <>
          <p className="text-lg mb-6">
            Welcome, {session?.user?.name ?? "User"}!
          </p>

          <div className="flex space-x-4 mb-6">
            <Button asChild>
              <Link href="/moodboard">Go to Moodboard</Link>
            </Button>
            <Button onClick={() => signOut()}>Sign out</Button>
          </div>
        </>
      ) : (
        <>
          <p className="text-lg mb-6">
            Define your brand's visual identity.
          </p>
          {error && (
            <div className="text-red-500 mb-4">Error: {error}</div>
          )}
          <div className="flex space-x-4">
            <Button onClick={() => signIn('google')} className="mr-2">
              Sign in with Google
            </Button>

            <Button asChild variant="secondary">
              <Link href="/signup">Sign up with Email</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
