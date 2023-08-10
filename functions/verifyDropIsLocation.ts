import Location from "@/enums/Location";
import { DragEndEvent } from "@dnd-kit/core";

export default function verifyDropIsLocation(e: DragEndEvent) {
  if (!Object.values(Location).some(location => location === e.over?.id)){
    document
    .getElementById(`${e.active.id}`)
    ?.removeAttribute('style');
    return;
  } 
}