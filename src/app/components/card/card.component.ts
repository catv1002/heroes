import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input('datos') listaHeroes;
  constructor() { }

}
