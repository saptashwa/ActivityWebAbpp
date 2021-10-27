import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreMaterialModule } from './core-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SubHeaderComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    CoreMaterialModule,
    FlexLayoutModule

  ],
  exports: [CoreMaterialModule, HeaderComponent, SubHeaderComponent, SideNavComponent]
})
export class CoreModule { }
