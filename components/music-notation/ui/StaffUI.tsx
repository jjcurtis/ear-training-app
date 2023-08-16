'use client';

import { StaffLocation } from '../StaffLocation';
import ClefUI from './ClefUI';
import Note from '@/classes/Note';
import INoteData from '@/interfaces/INoteData';
import NoteMenu from '../NoteMenu';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Pitch from '@/enums/Pitch';
import useStaff from '@/hooks/useStaff';
import dropIsLocation from '@/functions/dropIsLocation';
import handleMeasures from '@/functions/handleMeasures';
import handleStaff from '@/functions/handleStaff';
import resetActiveNote from '@/functions/resetActiveNote';
import { useMeasureContext } from '@/contexts/MeasureContext';
import playNote from '@/functions/playNote';

type Props = {};

export default function StaffUI({}: Props) {
  const { staff, setStaff } = useStaff();
  const { measures, setMeasures } = useMeasureContext()

  function handleDragEnd(e: DragEndEvent) {
    if (!dropIsLocation(e)) {
      resetActiveNote(e);
      return
    };

    const data = e.active.data.current as INoteData;
    
    if (!measures.at(-1)?.CanInsertValue(new Note(data.duration))) {
      resetActiveNote(e);
      return;
    }
    
    handleMeasures(e, measures, setMeasures);
    handleStaff(e, setStaff);
    playNote(e)
    resetActiveNote(e);
  }

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <section className="relative flex flex-col gap-2 mb-24 overflow-x-clip">
          <ClefUI />
          <StaffLocation
            id={Pitch.F5}
            type="line"
            staff={staff}
          />
          <StaffLocation
            id={Pitch.E5}
            type="space"
            staff={staff}
          />
          <StaffLocation
            id={Pitch.D5}
            type="line"
            staff={staff}
          />
          <StaffLocation
            id={Pitch.C5}
            type="space"
            staff={staff}
          />
          <StaffLocation
            id={Pitch.B4}
            type="line"
            staff={staff}
          />
          <StaffLocation
            id={Pitch.A4}
            type="space"
            staff={staff}
          />
          <StaffLocation
            id={Pitch.G4}
            type="line"
            staff={staff}
          />
          <StaffLocation
            id={Pitch.F4}
            type="space"
            staff={staff}
          />
          <StaffLocation
            id={Pitch.E4}
            type="line"
            staff={staff}
          />
        </section>
          <NoteMenu />
      </DndContext>
    </>
  );
}
