import { useState } from 'react';
import Note from '@/classes/Note';
import Location from '@/enums/Location';

export interface ILocation {
  location: Location;
  notes: (Note | null)[];
}

export default function useStaff() {
  const [staff, setStaff] = useState<ILocation[]>([
    {
      location: Location.FLine,
      notes: [],
    },
    {
      location: Location.ESpace,
      notes: [],
    },
    {
      location: Location.DLine,
      notes: [],
    },
    {
      location: Location.CSpace,
      notes: [],
    },
    {
      location: Location.BLine,
      notes: [],
    },
    {
      location: Location.ASpace,
      notes: [],
    },
    {
      location: Location.GLine,
      notes: [],
    },
    {
      location: Location.FSpace,
      notes: [],
    },
    {
      location: Location.ELine,
      notes: [],
    },
  ]);

  return { staff, setStaff };
}
