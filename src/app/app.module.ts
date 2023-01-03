import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutTimerComponent } from './workout-timer/workout-timer.component';
import { HomeComponent } from './home/home.component';
import { WorkoutSessionsComponent } from './workout-sessions/workout-sessions.component';
import { WorkoutSessionDetailComponent } from './workout-session-detail/workout-session-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutTimerComponent,
    HomeComponent,
    WorkoutSessionsComponent,
    WorkoutSessionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
