import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class NasaService {

  readonly apiUrl = 'https://api.nasa.gov/planetary/apod';
  readonly apiKey = 'zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb';

  constructor(
    private httpClient: HttpClient,
    private datePipe: DatePipe
  ) { }

  getApod(date: Date): Observable<any> {
    let dateAsString = this.datePipe.transform(date,'yyyy-MM-dd');
    return this.httpClient.get(`${this.apiUrl}?api_key=${this.apiKey}&date=${dateAsString}`);
  }


}
