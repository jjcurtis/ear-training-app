"use client"

import NoteMenu from '@/components/NoteMenu';
import StaffUI from '@/components/music-notation/StaffUI';
import { Heading } from '@/components/ui/Heading';
import React from 'react';

type Props = {};

export default function MelodyPage({}: Props) {
  return (
    <main className='px-8'>
      <Heading title="Melody Training" />
      <StaffUI />
      <NoteMenu />
    </main>
  );
}
