import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.css']
})
export class AvengersComponent implements OnInit {

  public avengersList:Observable<any[]>;
  
  constructor(public db:DatabaseService) { 
    this.avengersList = this.db.getData('/avengers');
  }

  ngOnInit() {
  }

}
