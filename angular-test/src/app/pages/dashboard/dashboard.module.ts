import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
