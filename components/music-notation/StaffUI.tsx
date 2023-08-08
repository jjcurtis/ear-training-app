'use client';

import { StaffLocation } from './StaffLocation';
import React, { useState } from 'react';
import ClefUI from './ClefUI';
import Measure from '@/classes/Measure';
import TimeSignature from '@/enums/TimeSignature';
import NoteMenu from '../NoteMenu';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import NoteUI from './NoteUI';
import Note from '@/classes/Note';
import Duration from '@/enums/Duration';

type Props = {};

export default function StaffUI({}: Props) {
  const [measures, setMeasures] = useState<Measure[]>([
    new Measure(TimeSignature.FourFour),
  ]);

  const [isDropped, setIsDropped] = useState(false);

  function handleDragEnd(e: DragEndEvent) {
    if (e.over && e.over.id === 'f-line') {
      setIsDropped(true);
    }
    const note = document.getElementById(`${e.active.id}`)
    note?.removeAttribute("style")
  }

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <section className="relative flex flex-col gap-2.5 mb-24">
          <ClefUI />
          <StaffLocation id="f-line" type="line">

          </StaffLocation>
          <StaffLocation id="e-space" type="space">

          </StaffLocation>
          <StaffLocation id="d-line" type="line">

          </StaffLocation>
          <StaffLocation id="c-space" type="space">

          </StaffLocation>
          <StaffLocation id="b-line" type="line">

          </StaffLocation>
          <StaffLocation id="a-space" type="space">

          </StaffLocation>
          <StaffLocation id="g-line" type="line">

          </StaffLocation>
          <StaffLocation id="f-space" type="space">

          </StaffLocation>
          <StaffLocation id="e-line" type="line">

          </StaffLocation>
          <NoteMenu />
        </section>
      </DndContext>
    </>
  );
}
