import Location from "@/enums/Location";
import { DragEndEvent } from "@dnd-kit/core";

export default function dropIsLocation(e: DragEndEvent): boolean {
  if (!Object.values(Location).some(location => location === e.over?.id)){
    return false;
  } 

  return true;
}