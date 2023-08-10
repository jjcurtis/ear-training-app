import Note from "@/classes/Note";
import Location from "@/enums/Location";

export default interface ILocation {
  location: Location;
  notes: (Note | null)[];
}