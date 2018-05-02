import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service'
import { Observable } from 'rxjs/Observable';
import { CardComponent } from '../card/card.component'
@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.css']
})
export class AvengersComponent implements OnInit {

  public lista: any;

  constructor(public db: DatabaseService) {
    let avengersList: Observable<any[]>;
    avengersList = this.db.getData('/avengers');
    this.lista = avengersList.forEach(items => {
      this.lista = items;
    });
  }

  ngOnInit() {
  }

}
