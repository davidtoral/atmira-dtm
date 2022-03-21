import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { NasaService } from './services/nasa.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule
  ],
  providers: [
    NasaService,
    DatePipe
  ]
})
export class AppCommonModule { }
