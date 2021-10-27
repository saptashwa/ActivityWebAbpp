import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAndAssignmentComponent } from './task-and-assignment.component';

const routes: Routes = [
  {path:'', component:TaskAndAssignmentComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskAndAssignmentRoutingModule { }
