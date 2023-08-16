import { DragEndEvent } from '@dnd-kit/core';
import Measure from '@/classes/Measure';
import Note from '@/classes/Note';
import INoteData from '@/interfaces/INoteData';
import { SetStateAction } from 'react';
import TimeSignature from '@/enums/TimeSignature';

export default function handleMeasures(
  e: DragEndEvent,
  measures: Measure[],
  setMeasures: React.Dispatch<SetStateAction<Measure[]>>
) {
  const data = e.active.data.current as INoteData;

  measures
    .at(-1)
    ?.InsertValue(new Note(data.duration));

    measures.at(-1)?.Remainder === 0 && setMeasures(measures => [...measures, new Measure(TimeSignature.FourFour)]);
}
