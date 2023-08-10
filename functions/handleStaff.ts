import { ILocation } from "@/hooks/useStaff";
import getNotes from "./getNotes";
import Note from "@/classes/Note";
import { SetStateAction } from "react";
import { DragEndEvent } from "@dnd-kit/core";
import Location from "@/enums/Location";
import INoteData from "@/interfaces/INoteData";

export default function handleStaff(e: DragEndEvent, setStaff: React.Dispatch<SetStateAction<ILocation[]>>) {
  const location = e.over?.id as Location;
    const data = e.active.data.current as INoteData;

  setStaff(staff => {
    const emptyLocations = staff.filter(
      staffLocation => staffLocation.location !== location
    );  

    emptyLocations.forEach(location =>
      location.notes.push(null)
    );  

    return [
      ...emptyLocations,
      {
        location,
        notes: [
          ...getNotes(staff, location),
          new Note(data.duration, data.pitch),
        ],
      },
    ];
  });
}