import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Apod } from 'src/app/interfaces/apod';
import { NasaService } from '../services/nasa.service';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  apod: Apod;

  constructor(
    private nasaService: NasaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getApodData();
  }

  getApodData(): void {
    const date = new Date(this.route.snapshot.paramMap.get('date'));

    this.nasaService.getApod(date)
    .pipe(takeUntil(this.unsubscribe$)).subscribe(apod => {
      this.apod = apod;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
