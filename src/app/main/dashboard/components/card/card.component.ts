import { Component, Input, OnInit } from '@angular/core';
import { Apod } from 'src/app/interfaces/apod';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() apod: Apod;

  constructor() { }

  ngOnInit(): void {
  }

}
