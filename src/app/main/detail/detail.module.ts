import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
  ]
})
export class DetailModule { }
