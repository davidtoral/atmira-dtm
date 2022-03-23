import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/utils/utils/utils.module';


@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule
  ],
  exports: [
  ]
})
export class DetailModule { }
