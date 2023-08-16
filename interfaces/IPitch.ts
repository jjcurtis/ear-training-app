import Note from "@/classes/Note";
import Pitch from "@/enums/Pitch";

export default interface IPitch {
  pitch: Pitch;
  notes: (Note | null)[];
}