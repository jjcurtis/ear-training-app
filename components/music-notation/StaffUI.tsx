'use client'

import { StaffLocation } from './StaffLocation';
import React, { useState } from 'react';
import ClefUI from './ClefUI';
import Measure from '@/classes/Measure';
import TimeSignature from '@/enums/TimeSignature';

type Props = {};

export default function StaffUI({}: Props) {
  const [measures, setMeasures] = useState<Measure[]>([new Measure(TimeSignature.FourFour)])
  
  return (
    <>
      <section className="relative">
        <ClefUI />
        <StaffLocation id='f-line' type='line'/>
        <StaffLocation id='e-space' type='space'/>
        <StaffLocation id='d-line' type='line'/>
        <StaffLocation id='c-space' type='space'/>
        <StaffLocation id='b-line' type='line'/>
        <StaffLocation id='a-space' type='space'/>
        <StaffLocation id='g-line' type='line'/>
        <StaffLocation id='f-space' type='space'/>
        <StaffLocation id='e-line' type='line'/>
      </section>
    </>
  );
}
