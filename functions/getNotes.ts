import Pitch from '@/enums/Pitch';
import IPitch from '@/interfaces/IPitch';

export default function getNotes(
  staff: IPitch[],
  pitch: Pitch
) {
  return staff
    .filter(
      staffLocation => staffLocation.pitch === pitch
    )
    .flatMap(pitch => pitch.notes);
}
