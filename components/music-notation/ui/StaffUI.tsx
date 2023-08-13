'use client';

import { useState } from 'react';
import { StaffLocation } from '../StaffLocation';
import ClefUI from './ClefUI';
import Note from '@/classes/Note';
import INoteData from '@/interfaces/INoteData';
import NoteMenu from '../NoteMenu';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Location from '@/enums/Location';
import useStaff from '@/hooks/useStaff';
import getNotes from '@/functions/getNotes';
import dropIsLocation from '@/functions/dropIsLocation';
import Measure from '@/classes/Measure';
import TimeSignature from '@/enums/TimeSignature';
import handleMeasures from '@/functions/handleMeasures';
import handleStaff from '@/functions/handleStaff';
import resetActiveNote from '@/functions/resetActiveNote';

type Props = {};

export default function StaffUI({}: Props) {
  const { staff, setStaff } = useStaff();
  const [measures, setMeasures] = useState<Measure[]>([new Measure(TimeSignature.FourFour)])

  function handleDragEnd(e: DragEndEvent) {
    if (!dropIsLocation(e)) {
      resetActiveNote(e);
      return
    };

    const data = e.active.data.current as INoteData;
    
    if (!measures.at(-1)?.CanInsertValue(new Note(data.duration, data.pitch))) {
      resetActiveNote(e);
      return;
    }
    
    handleMeasures(e, measures, setMeasures);
    handleStaff(e, setStaff);
    resetActiveNote(e);
  }

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <section className="relative flex flex-col gap-2 mb-24 overflow-x-clip">
          <ClefUI />
          <StaffLocation
            id={Location.FLine}
            type="line"
            notes={getNotes(staff, Location.FLine)}
          />
          <StaffLocation
            id={Location.ESpace}
            type="space"
            notes={getNotes(staff, Location.ESpace)}
          />
          <StaffLocation
            id={Location.DLine}
            type="line"
            notes={getNotes(staff, Location.DLine)}
          />
          <StaffLocation
            id={Location.CSpace}
            type="space"
            notes={getNotes(staff, Location.CSpace)}
          />
          <StaffLocation
            id={Location.BLine}
            type="line"
            notes={getNotes(staff, Location.BLine)}
          />
          <StaffLocation
            id={Location.ASpace}
            type="space"
            notes={getNotes(staff, Location.ASpace)}
          />
          <StaffLocation
            id={Location.GLine}
            type="line"
            notes={getNotes(staff, Location.GLine)}
          />
          <StaffLocation
            id={Location.FSpace}
            type="space"
            notes={getNotes(staff, Location.FSpace)}
          />
          <StaffLocation
            id={Location.ELine}
            type="line"
            notes={getNotes(staff, Location.ELine)}
          />
          <NoteMenu />
        </section>
      </DndContext>
    </>
  );
}
