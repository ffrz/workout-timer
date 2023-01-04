import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutSessionDetailComponent } from './workout-session-detail/workout-session-detail.component';
import { WorkoutSessionsComponent } from './workout-sessions/workout-sessions.component';
import { WorkoutTimerComponent } from './workout-timer/workout-timer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workout-timer/:id', component: WorkoutTimerComponent },
  { path: 'workout-sessions', component: WorkoutSessionsComponent },
  { path: 'workout-session-detail/:id', component: WorkoutSessionDetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
