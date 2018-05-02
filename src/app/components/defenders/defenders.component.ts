import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-defenders',
  templateUrl: './defenders.component.html',
  styleUrls: ['./defenders.component.css']
})
export class DefendersComponent implements OnInit {

  public defendersList: Observable<any[]>;
  constructor(public dbServices: DatabaseService) {
   }

  ngOnInit() {
    this.defendersList = this.dbServices.getData('/defenders');

  }

}
