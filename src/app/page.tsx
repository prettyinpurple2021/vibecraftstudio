'use client';

import {Button} from "@/components/ui/button";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";
import {useState} from "react";

export default function Home() {
  const {data: session} = useSession();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">VibeCraft Studio</h1>

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

          {/* You can add a basic moodboard display here later if you want */}
          {/* <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Your Mood Boards</h2>
            <p className="mb-4">No mood boards yet. Start creating one!</p>
            <Button asChild>
              <Link href="/moodboard">Create New Mood Board</Link>
            </Button>
          </div> */}
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
            <Button onClick={() => signIn("google")} className="mr-2">
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
