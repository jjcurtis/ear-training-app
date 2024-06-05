import Note from '@/classes/Note';
import { useDroppable } from '@dnd-kit/core';
import NoteUI from './ui/NoteUI';
import IPitch from '@/interfaces/IPitch';
import Pitch from '@/enums/Pitch';
import getNotes from '@/functions/getNotes';
import { useMeasureContext } from '@/contexts/MeasureContext';
import React from 'react';

type Props = {
  id: string;
  type: 'line' | 'space';
  staff: IPitch[];
};
export function StaffLocation({ id, type, staff }: Props) {
  const { isOver, setNodeRef } = useDroppable({ id });

  const { measures } = useMeasureContext();

  const className =
    type === 'line'
      ? `${
          isOver
            ? 'outline outline-4 outline-sky-300'
            : undefined
        } border border-black bg-black h-[2px] relative`
      : `${
          isOver
            ? 'bg-sky-300 outline outline-8 outline-sky-300'
            : undefined
        } border border-transparent h-[2px] relative`;

  const notes = getNotes(staff, id as Pitch);

  const allMeasures = measures.flatMap(
    measure => measure.StoredValues
  );

  return (
    <div id={id} ref={setNodeRef} className={className}>
      {notes.map((note, index) => {
        const notePadding = allMeasures[index - 1]?.Duration
          ? allMeasures[index - 1]?.Duration
          : 0;

        return (
          <React.Fragment key={index}>
            {!!note && (
              <div
                className={`absolute w-0 -top-[1.1rem]`}
                style={{
                  left: `calc(${index * 50}px + ${
                    notePadding / 25 + 5
                  }rem)`,
                }}
              >
                <NoteUI
                  note={new Note(note.Duration, id as Pitch)}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
