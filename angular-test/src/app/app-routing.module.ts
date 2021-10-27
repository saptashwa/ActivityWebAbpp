import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { TaskAndAssignmentModule } from './pages/task-and-assignment/task-and-assignment.module';

const routes: Routes = [
  {path:'',
  redirectTo:'/dashboard',
  pathMatch:'full'
  },
  
  {
    path : "dashboard",
    loadChildren : ()=> DashboardModule
  },
  {
    path : "t&a",
    loadChildren : ()=> TaskAndAssignmentModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
