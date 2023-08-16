import { useState } from 'react';
import Pitch from '@/enums/Pitch';
import IPitch from '@/interfaces/IPitch';

export default function useStaff() {
  const [staff, setStaff] = useState<IPitch[]>([
    {
      pitch: Pitch.F5,
      notes: [],
    },
    {
      pitch: Pitch.E5,
      notes: [],
    },
    {
      pitch: Pitch.D5,
      notes: [],
    },
    {
      pitch: Pitch.C5,
      notes: [],
    },
    {
      pitch: Pitch.B4,
      notes: [],
    },
    {
      pitch: Pitch.A4,
      notes: [],
    },
    {
      pitch: Pitch.G4,
      notes: [],
    },
    {
      pitch: Pitch.F4,
      notes: [],
    },
    {
      pitch: Pitch.E4,
      notes: [],
    },
  ]);

  return { staff, setStaff };
}
