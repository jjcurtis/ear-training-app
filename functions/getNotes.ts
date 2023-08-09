import Location from '@/enums/Location';
import { ILocation } from '@/hooks/useStaff';

export default function getNotes(
  staff: ILocation[],
  location: Location
) {
  return staff
    .filter(
      staffLocation => staffLocation.location === location
    )
    .flatMap(location => location.notes);
}
