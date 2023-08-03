'use client';

import Note from '@/classes/Note';
import Image from 'next/image';
import React from 'react';
import getNoteImage from '@/functions/getNoteImage'
import calculateNoteWidth from '@/functions/calculateNoteWidth';

type Props = {
  note: Note,
  template?: boolean,
};

export default function NoteUI({ note, template = false }: Props) {
  return (
    <button draggable={template ? "true" : "false"} className='hover:bg-sky-200 mx-2 p-1.5 border-transparent border-2 hover:border-sky-700 rounded-md' >
      <Image width={calculateNoteWidth(note)} src={getNoteImage(note)} alt='' />
    </button>
  );
}
