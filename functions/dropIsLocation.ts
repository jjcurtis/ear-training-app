import Pitch from "@/enums/Pitch";
import { DragEndEvent } from "@dnd-kit/core";

export default function dropIsLocation(e: DragEndEvent): boolean {
  if (!Object.values(Pitch).some(pitch => pitch === e.over?.id)){
    return false;
  } 

  return true;
}