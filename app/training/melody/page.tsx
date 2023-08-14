import StaffUI from '@/components/music-notation/ui/StaffUI';
import { Heading } from '@/components/ui/Heading';
import MeasureContextProvider from '@/contexts/MeasureContext';

type Props = {};

export default async function MelodyPage({}: Props) {
  return (
    <main className="px-8">
      <Heading title="Melody Training" />
      <MeasureContextProvider>
        <StaffUI />
      </MeasureContextProvider>
    </main>
  );
}
