import { Component, OnInit, OnDestroy } from '@angular/core';
import { NasaService } from '../services/nasa.service';
import { Apod } from './../../interfaces/apod';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  readonly APODS_TO_GET = 6;
  apods: Apod[] = [];

  constructor(
    private nasaService: NasaService
  ) { }

  ngOnInit(): void {
    this.getApodData(this.APODS_TO_GET);
  }

  /*
  * Get apod data and push to array until index is less than 0
  * Index will be decrease every time the function is called
  */
  getApodData(index: number): void {
    index--;
    const today = new Date();
    const dayMinusIndex = new Date(today.setDate(today.getDate() - index));
    this.nasaService.getApod(dayMinusIndex)
    .pipe(takeUntil(this.unsubscribe$)).subscribe(apod => {
      this.apods.push(apod);

      if (index) {
        this.getApodData(index);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
