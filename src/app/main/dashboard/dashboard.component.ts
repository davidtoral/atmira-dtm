import { Component, OnInit } from '@angular/core';
import { NasaService } from '../services/nasa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  apods: any[] = [];

  constructor(
    private nasaService: NasaService
  ) { }

  ngOnInit(): void {
    this.nasaService.getApod(new Date()).subscribe(apod => {
      this.apods.push(apod);
    });
  }

}
