import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { DetailModule } from './detail/detail.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    DetailModule,
  ],
  providers: [
  ]
})
export class AppCommonModule { }
