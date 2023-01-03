import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutSession } from '../workout-session';
import { WORKOUT_SESSIONS } from '../mock-workout-sessions';

@Component({
  selector: 'app-workout-session-detail',
  templateUrl: './workout-session-detail.component.html',
  styleUrls: ['./workout-session-detail.component.scss']
})
export class WorkoutSessionDetailComponent {
  session?: WorkoutSession;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getSession();
  }

  getSession(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.session = WORKOUT_SESSIONS.find(i => i.id === id);
  }

  start() {
    
  }
}
