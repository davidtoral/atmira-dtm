import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent
  ],
  imports: [
  CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
  ]
})
export class DashboardModule { }
