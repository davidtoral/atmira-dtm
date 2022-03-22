import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { Apod } from 'src/app/interfaces/apod';

@Injectable({
  providedIn: 'root'
})

export class NasaService {

  readonly API_URL = 'https://api.nasa.gov/planetary/apod';
  readonly API_KEY = 'zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb';

  constructor(
    private httpClient: HttpClient,
    private datePipe: DatePipe
  ) { }

  getApod(date: Date): Observable<Apod> {
    let dateAsString = this.datePipe.transform(date,'yyyy-MM-dd');
    return this.httpClient.get<Apod>(`${this.API_URL}?api_key=${this.API_KEY}&date=${dateAsString}`);
  }


}
