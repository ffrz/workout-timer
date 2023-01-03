import { Component } from '@angular/core';
import { WORKOUT_SESSIONS } from '../mock-workout-sessions';
import { WorkoutSession } from '../workout-session';

@Component({
  selector: 'app-workout-sessions',
  templateUrl: './workout-sessions.component.html',
  styleUrls: ['./workout-sessions.component.scss']
})
export class WorkoutSessionsComponent {
  sessions: WorkoutSession[] = [];

  ngOnInit() {
    this.sessions = WORKOUT_SESSIONS;
  }
}
