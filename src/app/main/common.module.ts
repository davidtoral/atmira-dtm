import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { NasaService } from './services/nasa.service';
import { DetailModule } from './detail/detail.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    DetailModule
  ],
  providers: [
    NasaService,
    DatePipe
  ]
})
export class AppCommonModule { }
