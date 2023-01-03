import { Component } from '@angular/core';
import { Movement } from '../movement';
import { MOVEMENTS } from '../mock-movements';

@Component({
  selector: 'app-workout-timer',
  templateUrl: './workout-timer.component.html',
  styleUrls: ['./workout-timer.component.scss']
})
export class WorkoutTimerComponent {
  currentMovementIndex: number = -1;
  currentMovement?: Movement;
  currentMovements: Movement[] = [];

  isPaused: boolean = false;

  currentCountDownValue: number = 0;
  currentMovementName: string = '';
  workoutInterval?: any;

  ngOnInit() {
    this.currentMovements = MOVEMENTS;
    this.resetState();
  }

  ngOnDestroy() {
    this.stop();
  }

  isPlaying(): boolean {
    return this.workoutInterval != undefined;
  }

  updateCurrentMovement() {
    this.currentMovement = this.currentMovements[this.currentMovementIndex];
    this.currentCountDownValue = this.currentMovement.duration;
    this.currentMovementName = this.currentMovement.name;
  }

  previousMovement() {
    if (this.currentMovementIndex <= 0) {
      return;
    }

    this.currentMovementIndex--;
    this.updateCurrentMovement();
  }

  nextMovement() {
    if (this.currentMovementIndex == this.currentMovements.length) {
      return;
    }

    this.currentMovementIndex++;
    this.updateCurrentMovement();
  }

  pause() {
    this.isPaused = !this.isPaused;
  }

  start() {
    if (this.currentMovements.length == 0) {
      return;
    }

    this.resetState();

    this.workoutInterval = setInterval(() => {
      if (this.isPaused) {
        return;
      }

      if (this.currentCountDownValue == 0) {
        if (this.currentMovementIndex == this.currentMovements.length) {
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
