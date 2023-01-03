import { Movement } from "./movement";

export interface WorkoutSession {
  id: number;
  name: string;
  duration: number;
  movements: Movement[];
}