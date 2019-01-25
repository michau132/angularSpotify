import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'

import { NavBarComponent } from './nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavBarComponent,
  ],
  exports:[
    NavBarComponent
  ],
})
export class NavBarModule { }
