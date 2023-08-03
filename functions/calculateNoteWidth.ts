import Note from '@/classes/Note';
import Duration from '@/enums/Duration';

export default function calculateNoteWidth(
  note: Note
): number {
  if (
    note.Duration === Duration.DottedHalf ||
    note.Duration === Duration.DottedQuarter
  ) {
    return 33;
  }
  return 20;
}
