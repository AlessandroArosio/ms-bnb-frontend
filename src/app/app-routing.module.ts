import {NgModule} from '@angular/core';
import {RestaurantsComponent} from "./components/restaurants/restaurants.component";
import {RouterModule, Routes} from "@angular/router";
import {ThingsToDoComponent} from "./components/things-to-do/things-to-do.component";
import {TransportComponent} from "./components/transport/transport.component";
import {BookingInfoComponent} from "./components/booking/booking-info/booking-info.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/booking-info', pathMatch: 'full'},
  { path: 'booking-info', component: BookingInfoComponent },
  { path: 'transport', component: TransportComponent },
  { path: 'things', component: ThingsToDoComponent },
  { path: 'restaurants', component: RestaurantsComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
