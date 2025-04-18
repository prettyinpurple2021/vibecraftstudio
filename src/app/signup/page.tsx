'use client';

import React, {useState} from 'react';
import {useRouter} from 'next/navigation';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to dashboard or login page upon successful signup
        router.push('/');
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1>Sign Up</h1>
      {error && (
        <div className="text-red-500 mb-4">Error: {error}</div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpPage;
