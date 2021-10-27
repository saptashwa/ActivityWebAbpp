import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SalesActivityComponent } from './components/sales-activity/sales-activity.component';



@NgModule({
  declarations: [
    SalesActivityComponent
  ],
  imports: [
    CoreModule,
    CommonModule
  ],
  exports: [SalesActivityComponent]
})
export class SharedModule { }
