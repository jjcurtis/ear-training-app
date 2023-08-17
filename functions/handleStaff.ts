import IPitch from "@/interfaces/IPitch";
import Pitch from "@/enums/Pitch";
import getNotes from "./getNotes";
import Note from "@/classes/Note";
import { SetStateAction } from "react";
import { DragEndEvent } from "@dnd-kit/core";
import INoteData from "@/interfaces/INoteData";

export default function handleStaff(e: DragEndEvent, setStaff: React.Dispatch<SetStateAction<IPitch[]>>) {
  const pitch = e.over?.id as Pitch;
  const data = e.active.data.current as INoteData;

  setStaff(staff => {
    const emptyLocations = staff.filter(
      staffLocation => staffLocation.pitch !== pitch
    );  

    emptyLocations.forEach(location =>
      location.notes.push(null)
    );  

    return [
      ...emptyLocations,
      {
        pitch,
        notes: [
          ...getNotes(staff, pitch),
          new Note(data.duration, pitch),
        ],
      },
    ];
  });
}