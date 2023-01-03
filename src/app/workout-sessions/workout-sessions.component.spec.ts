import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutSessionsComponent } from './workout-sessions.component';

describe('WorkoutSessionsComponent', () => {
  let component: WorkoutSessionsComponent;
  let fixture: ComponentFixture<WorkoutSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutSessionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
