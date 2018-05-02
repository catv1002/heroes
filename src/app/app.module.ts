import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AvengersComponent } from './components/avengers/avengers.component';
import { DefendersComponent } from './components/defenders/defenders.component';

//AngularFire2
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2';

//Services 
import { DatabaseService } from './services/database.service'

//environment
import { environment } from '../environments/environment';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    AvengersComponent,
    DefendersComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
