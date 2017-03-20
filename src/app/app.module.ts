import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewLocationPage } from '../pages/new-location/new-location';
import {LocationsService} from "../services/locations.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewLocationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewLocationPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},LocationsService]
})
export class AppModule {}
