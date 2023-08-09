'use client';

import Measure from '@/classes/Measure';
import Note from '@/classes/Note';
import Rest from '@/classes/Rest';
import React, { useState } from 'react';

type Props = {
  measure: Measure
};

export default function MeasureUI({ measure }: Props) {
  const [notation, setNotation] = useState<(Note | Rest)[]>([]);
  
  return <div className='border-r-2 border-black absolute top-0 right-0 h-[calc(100%_-_8px)] ml-20 pl-[calc(100%_-_5rem)] sm:px-48'></div>;
}
