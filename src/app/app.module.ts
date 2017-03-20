import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewLocationPage } from '../pages/new-location/new-location';
import { LocationPage } from '../pages/location/location';
import {LocationsService} from "../services/locations.service";
import {IonicStorageModule} from '@ionic/storage';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewLocationPage,
    LocationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvaIqT-J-DW6-i4997lt20EuThh7oV_5A'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewLocationPage,
    LocationPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},LocationsService]
})
export class AppModule {}
