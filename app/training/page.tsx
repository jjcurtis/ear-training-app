import Course from '@/components/Course';
import { Heading } from './../../components/ui/Heading';
import React from 'react';
import MelodyImage from '@/public/course-images/icons8-melody.svg';
import HarmonyImage from '@/public/course-images/Roman_Numeral_Analysis_-_Inversion_notation.svg';
import RhythmImage from '@/public/course-images/Notes.svg'
import Grid from '@/components/ui/Grid';

type Props = {};

export default function TrainingPage({}: Props) {
  return (
    <>
      <Heading title="Hone Your Listening Skills" />
      <Grid gap={8} padding={8}>
        <Course
          title="Melody"
          description="Learn to hear and transcribe melodies"
          imageSrc={MelodyImage}
          width={75}
        />
        <Course
          title="Harmony"
          description="Learn to hear and transcribe harmonies"
          imageSrc={HarmonyImage}
          width={147}
        />
        <Course
          title="Rhythm"
          description="Learn to hear and transcribe rhythms"
          imageSrc={RhythmImage}
          width={240}
        />
      </Grid>
    </>
  );
}
