'use client';

import StaffUI from '@/components/music-notation/StaffUI';
import { Heading } from '@/components/ui/Heading';

type Props = {};

export default function MelodyPage({}: Props) {

  return (
    <main className="px-8">
      <Heading title="Melody Training" />
        <StaffUI />
    </main>
  );
}
