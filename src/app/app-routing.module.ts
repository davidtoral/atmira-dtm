import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { DetailComponent } from './main/detail/detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'detail/:date', component: DetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
