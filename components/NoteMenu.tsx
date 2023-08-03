import React from 'react';
import Note from '@/classes/Note';
import Duration from '@/enums/Duration';
import NoteUI from './music-notation/NoteUI';

export default function NoteMenu() {
  return (
    <section className="flex justify-center">
      <NoteUI note={new Note(Duration.Whole, 87)} template={true} />
      <NoteUI note={new Note(Duration.DottedHalf, 88)} template={true} />
      <NoteUI note={new Note(Duration.Half, 87)} template={true} />
      <NoteUI note={new Note(Duration.DottedQuarter, 88)} template={true} />
      <NoteUI note={new Note(Duration.Quarter, 88)} template={true} />
    </section>
  );
}
