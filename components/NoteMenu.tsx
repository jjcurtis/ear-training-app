import React from 'react';
import Note from '@/classes/Note';
import Duration from '@/enums/Duration';
import NoteUI from './music-notation/NoteUI';

export default function NoteMenu() {
  return (
    <section className="flex border border-x-4 border-transparent w-fit mt-24 transition-colors hover:border-sky-400 rounded-xl border-t-0 border-b-0">
      <NoteUI note={new Note(Duration.Whole, 87)} id='whole' />
      <NoteUI note={new Note(Duration.DottedHalf, 88)} id='dotted-half' />
      <NoteUI note={new Note(Duration.Half, 87)} id='half' />
      <NoteUI note={new Note(Duration.DottedQuarter, 88)} id='dotted-quarter' />
      <NoteUI note={new Note(Duration.Quarter, 88)} id='quarter' />
    </section>
  );
}
