import Note from '@/classes/Note';
import { useDroppable } from '@dnd-kit/core';
import NoteUI from './ui/NoteUI';

type Props = {
  id: string;
  type: 'line' | 'space';
  notes: (Note | null)[];
};
export function StaffLocation({ id, type, notes }: Props) {
  const { isOver, setNodeRef } = useDroppable({ id });

  const className =
    type === 'line'
      ? `${
          isOver &&
          'bg-sky-500 outline outline-4 outline-sky-500'
        } border border-black bg-black h-[2px] relative`
      : `${
          isOver &&
          'bg-sky-500 outline outline-8 outline-sky-500'
        } border border-transparent relative`;
  return (
    <div id={id} ref={setNodeRef} className={className}>
      {notes.map((note, index) => {
        const leftSpacing = (index + 1) * 3;

        return (
          <div
            key={index}
            className={`absolute -top-[1.1rem]`}
            style={{ left: `${leftSpacing + 3}rem` }}
          >
            {note !== null && (
              <NoteUI
                note={new Note(note.Duration, note.Pitch)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
