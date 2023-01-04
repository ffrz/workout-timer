import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutSession } from '../workout-session';
import { Movement } from '../movement';
import { WORKOUT_SESSIONS } from '../mock-workout-sessions';

@Component({
  selector: 'app-workout-timer',
  templateUrl: './workout-timer.component.html',
  styleUrls: ['./workout-timer.component.scss']
})
export class WorkoutTimerComponent {
  currentMovementIndex: number = -1;
  currentMovement?: Movement;

  isPaused: boolean = false;

  currentCountDownValue: number = 0;
  currentMovementName: string = '';
  workoutInterval?: any;
  session?: WorkoutSession;

  constructor(
    private location: Location,
    private route: ActivatedRoute) {
  }

  getSession(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.session = WORKOUT_SESSIONS.find(i => i.id === id);
  }

  ngOnInit() {
    this.getSession();
    this.resetState();
  }

  ngOnDestroy() {
    this.stop();
  }

  isPlaying(): boolean {
    return this.workoutInterval != undefined;
  }

  updateCurrentMovement() {
    this.currentMovement = this.session?.movements[this.currentMovementIndex];
    this.currentCountDownValue = this.currentMovement!.duration;
    this.currentMovementName = this.currentMovement!.name;
  }

  previousMovement() {
    if (this.currentMovementIndex <= 0) {
      return;
    }

    this.currentMovementIndex--;
    this.updateCurrentMovement();
  }

  nextMovement() {
    if (this.currentMovementIndex == this.session?.movements.length) {
      return;
    }

    this.currentMovementIndex++;
    this.updateCurrentMovement();
  }

  pause() {
    this.isPaused = !this.isPaused;
  }

  start() {
    if (this.session?.movements.length == 0) {
      return;
    }

    this.resetState();

    this.workoutInterval = setInterval(() => {
      if (this.isPaused) {
        return;
      }

      if (this.currentCountDownValue == 0) {
        if (this.currentMovementIndex == this.session?.movements.length) {
          // we have reached the end of the movement
          this.stop();
          this.currentMovementName = 'COMPLETED';
          this.currentCountDownValue = 0;
          return;
        }
        this.nextMovement();
      }
      else {
        this.currentCountDownValue--;
      }
    }, 1000);
  }

  stop() {
    this.resetState();
    clearInterval(this.workoutInterval);
    this.workoutInterval = undefined;
  }

  resetState() {
    this.currentCountDownValue = 0;
    this.currentMovementIndex = -1;
    this.currentMovement = undefined;
    this.currentMovementName = 'Prepare Yourself';
  }
}
