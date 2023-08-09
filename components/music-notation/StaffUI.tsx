'use client';

import { StaffLocation } from './StaffLocation';
import ClefUI from './ClefUI';
import Note from '@/classes/Note';
import { NoteData } from './NoteUI';
import NoteMenu from '../NoteMenu';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Location from '@/enums/Location';
import useStaff from '@/hooks/useStaff';
import getNotes from '@/functions/getNotes';

type Props = {};

export default function StaffUI({}: Props) {
  const { staff, setStaff } = useStaff();

  function handleDragEnd(e: DragEndEvent) {
    const location = e.over?.id as Location;
    const data = e.active.data.current as NoteData;

    setStaff(staff => [
      ...staff.filter(
        staffLocation => staffLocation.location !== location
      ),
      {
        location,
        notes: [
          ...getNotes(staff, location),
          new Note(data.duration, 88),
        ],
      },
    ]);

    document
      .getElementById(`${e.active.id}`)
      ?.removeAttribute('style');
  }

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <section className="relative flex flex-col gap-2 mb-24">
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
