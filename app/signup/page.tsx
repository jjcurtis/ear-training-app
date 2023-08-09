import React from 'react';
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';
import { Heading } from '@/components/ui/Heading';

async function addUser(e: FormData) {
  'use server';
  for (const [, value] of e.entries()) {
    if (value === '') {
      return;
    }
  }

  const [name, email, password, confirmPassword] =
    Array.from(e.values()).map(value => value.toString());

  if (password !== confirmPassword) {
    return;
  }
  const client = new PrismaClient();
  const newUser = await client.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  redirect('/profile');
}

export default function SignupPage() {
  return (
    <>
    <Heading title='Create A Profile'/>
    <form
      className="p-8 mt-8 flex gap-3 mx-auto flex-col w-2/3 md:w-1/2 lg:w-1/3 rounded-lg border-4 border-opacity-50 border-sky-800 bg-sky-400 shadow-2xl"
      action={addUser}
    >
      <label htmlFor="name">Username</label>
      <input
        className="bg-cyan-50"
        type="text"
        name="name"
        id="name"
      />
      <label htmlFor="email">Email</label>
      <input
        className="bg-cyan-50"
        type="email"
        name="email"
        id="email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="bg-cyan-50"
        type="password"
        name="password"
        id="password"
      />
      <label htmlFor="confirm-password">
        Confirm Password
      </label>
      <input
        className="bg-cyan-50"
        type="password"
        name="confirm-password"
        id="confirm-password"
      />
      <input
        className="border rounded-lg text-center px-3 py-1 text-lg text-sky-100 text-opacity-75 hover:text-opacity-100 font-semibold transition-colors bg-opacity-50 hover:bg-opacity-100 border-sky-100 bg-sky-700 place-self-start cursor-pointer"
        type="submit"
        value="Sign Up"
      />
    </form>
    </>
  );
}
