import { Component, OnInit, OnDestroy } from '@angular/core';
import { NasaService } from '../../utils/utils/services/nasa.service';
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
  loading = false;

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
    this.loading = true;
    index--;
    const today = new Date();
    const dayMinusIndex = new Date(today.setDate(today.getDate() - index));
    this.nasaService.getApod(dayMinusIndex)
    .pipe(takeUntil(this.unsubscribe$)).subscribe(apod => {
      this.apods.push(apod);
      index ? this.getApodData(index) : this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
