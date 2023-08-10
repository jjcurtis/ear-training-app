import { DragEndEvent } from "@dnd-kit/core";

export default function resetActiveNote(e: DragEndEvent) {
  document
      .getElementById(`${e.active.id}`)
      ?.removeAttribute('style');
}