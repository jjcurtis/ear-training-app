'use client';

import Note from '@/classes/Note';
import Image from 'next/image';
import Duration from '@/enums/Duration';
import React, { CSSProperties } from 'react';
import getNoteImage from '@/functions/getNoteImage'
import calculateNoteWidth from '@/functions/calculateNoteWidth';
import { useDraggable } from '@dnd-kit/core'

type Props = {
  note: Note,
  id?: string
};

export type NoteData = {
  duration: Duration,
  pitch: number
}

export default function NoteUI({ note, id }: Props) {
  const data: NoteData = {
    duration: note.Duration,
    pitch: note.Pitch
  }

  const {attributes, listeners, setNodeRef, transform} = useDraggable({ id: id ?? '', data });

  const style: CSSProperties = {
      transform: `translate3d(${transform?.x}px, ${(transform?.y)}px, 0)`,
  }

  return (
    <button id={id} className='mx-2 p-1.5 border-transparent border-2 rounded-3xl w-[2.375rem] h-6 relative' style={style} ref={setNodeRef} {...attributes} {...listeners}  >
      <Image width={calculateNoteWidth(note)} src={getNoteImage(note)} alt='' className='absolute -top-[2.375rem] left-[.4375rem]' />
    </button>
  );
}
