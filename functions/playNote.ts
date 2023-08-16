import { DragEndEvent } from "@dnd-kit/core";
import Pitch from "@/enums/Pitch";

export default function playNote(e: DragEndEvent) {
  const pitch = e.over?.id as Pitch
  const note = new Audio(`/sounds/${pitch}.mp3`)
  note.play()
}