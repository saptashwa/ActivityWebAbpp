import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAndAssignmentComponent } from './task-and-assignment.component';

describe('TaskAndAssignmentComponent', () => {
  let component: TaskAndAssignmentComponent;
  let fixture: ComponentFixture<TaskAndAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAndAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAndAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
