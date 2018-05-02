import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-defenders',
  templateUrl: './defenders.component.html',
  styleUrls: ['./defenders.component.css']
})
export class DefendersComponent implements OnInit {

   public lista: any;

   constructor(public db: DatabaseService) {
     let defendersList: Observable<any[]>;
     defendersList = this.db.getData('/defenders');
     this.lista = defendersList.forEach(items => {
       this.lista = items;
     });
   }
  ngOnInit() {
  }

}
