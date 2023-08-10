'use client';

import { StaffLocation } from '../StaffLocation';
import ClefUI from './ClefUI';
import Note from '@/classes/Note';
import INoteData from '@/interfaces/INoteData';
import NoteMenu from '../NoteMenu';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Location from '@/enums/Location';
import useStaff from '@/hooks/useStaff';
import getNotes from '@/functions/getNotes';
import verifyDropIsLocation from '@/functions/verifyDropIsLocation';

type Props = {};

export default function StaffUI({}: Props) {
  const { staff, setStaff } = useStaff();

  function handleDragEnd(e: DragEndEvent) {
    verifyDropIsLocation(e);
     
    const location = e.over?.id as Location;
    const data = e.active.data.current as INoteData;

    setStaff(staff => {
      const emptyLocations = staff.filter(
        staffLocation => staffLocation.location !== location
      );

      emptyLocations.forEach(location =>
        location.notes.push(null)
      );

      return [
        ...emptyLocations,
        {
          location,
          notes: [
            ...getNotes(staff, location),
            new Note(data.duration, data.pitch),
          ],
        },
      ];
    });

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
