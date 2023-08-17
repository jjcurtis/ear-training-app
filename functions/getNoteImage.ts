import Note from '@/classes/Note';
import Duration from '@/enums/Duration';
import Whole from '@/public/music-images/whole-note.svg';
import DottedHalf from '@/public/music-images/dotted-half-note.svg';
import Half from '@/public/music-images/half-note.svg';
import DottedQuarter from '@/public/music-images/dotted-quarter-note.svg'
import Quarter from '@/public/music-images/quarter-note.svg';
import { StaticImageData } from 'next/image';

export default function getNoteImage(
  note: Note
): StaticImageData | string {
  switch (note.Duration) {
    case Duration.Whole:
      return Whole;
    case Duration.DottedHalf:
      return DottedHalf;
    case Duration.Half:
      return Half;
    case Duration.DottedQuarter:
      return DottedQuarter;
    case Duration.Quarter:
      return Quarter;
    default:
      return '';
  }
}
