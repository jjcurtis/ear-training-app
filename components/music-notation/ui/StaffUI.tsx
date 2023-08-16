'use client';

import { StaffLocation } from '../StaffLocation';
import ClefUI from './ClefUI';
import Note from '@/classes/Note';
import INoteData from '@/interfaces/INoteData';
import NoteMenu from '../NoteMenu';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Location from '@/enums/Location';
import useStaff from '@/hooks/useStaff';
import dropIsLocation from '@/functions/dropIsLocation';
import handleMeasures from '@/functions/handleMeasures';
import handleStaff from '@/functions/handleStaff';
import resetActiveNote from '@/functions/resetActiveNote';
import { useMeasureContext } from '@/contexts/MeasureContext';

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
            staff={staff}
          />
          <StaffLocation
            id={Location.ESpace}
            type="space"
            staff={staff}
          />
          <StaffLocation
            id={Location.DLine}
            type="line"
            staff={staff}
          />
          <StaffLocation
            id={Location.CSpace}
            type="space"
            staff={staff}
          />
          <StaffLocation
            id={Location.BLine}
            type="line"
            staff={staff}
          />
          <StaffLocation
            id={Location.ASpace}
            type="space"
            staff={staff}
          />
          <StaffLocation
            id={Location.GLine}
            type="line"
            staff={staff}
          />
          <StaffLocation
            id={Location.FSpace}
            type="space"
            staff={staff}
          />
          <StaffLocation
            id={Location.ELine}
            type="line"
            staff={staff}
          />
        </section>
          <NoteMenu />
      </DndContext>
    </>
  );
}
