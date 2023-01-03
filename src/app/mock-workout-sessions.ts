import { Movement } from './movement';
import { WorkoutSession } from './workout-session';

export const WORKOUT_SESSIONS: WorkoutSession[] = [
  {
    id: 1,
    name: 'Beginner Cardio 1',
    duration: 100,
    movements: [
      { id: 1, name: 'Movement 1', duration: 30 },
      { id: 2, name: 'Rest', duration: 10 },
      { id: 3, name: 'Movement 2', duration: 30 },
      { id: 4, name: 'Rest', duration: 10 },
      { id: 5, name: 'Movement 3', duration: 30 },
      { id: 6, name: 'Rest', duration: 10 },
      { id: 7, name: 'Movement 4', duration: 30 },
      { id: 8, name: 'Rest', duration: 10 },
    ]
  },
  {
    id: 2,
    name: 'Beginner Cardio 2',
    duration: 200,
    movements: [
      { id: 1, name: 'Run in place', duration: 30 },
      { id: 2, name: 'Rest', duration: 10 },
      { id: 3, name: 'Russian Twist', duration: 30 },
      { id: 4, name: 'Rest', duration: 10 },
      { id: 5, name: 'Movement 3', duration: 30 },
      { id: 6, name: 'Rest', duration: 10 },
      { id: 7, name: 'Movement 4', duration: 30 },
      { id: 8, name: 'Rest', duration: 10 },
    ]
  },
];