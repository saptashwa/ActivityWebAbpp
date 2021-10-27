import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAndAssignmentRoutingModule } from './task-and-assignment-routing.module';
import { TaskAndAssignmentComponent } from './task-and-assignment.component';



@NgModule({
  declarations: [
    TaskAndAssignmentComponent
  ],
  imports: [
    CommonModule,
    TaskAndAssignmentRoutingModule
  ]
})
export class TaskAndAssignmentModule { }
