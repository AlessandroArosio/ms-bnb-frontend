import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {ThingsToDoComponent} from './components/things-to-do/things-to-do.component';
import {TransportComponent} from './components/transport/transport.component';
import {BookingInfoComponent} from './components/booking/booking-info/booking-info.component';
import {BookingListComponent} from './components/booking/booking-list/booking-list.component';
import {BookingNewComponent} from './components/booking/booking-new/booking-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantsComponent,
    ThingsToDoComponent,
    TransportComponent,
    BookingInfoComponent,
    BookingListComponent,
    BookingNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
