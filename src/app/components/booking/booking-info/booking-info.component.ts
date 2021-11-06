import {Component, OnInit} from '@angular/core';
import {Extras} from "../../../common/booking/extras";
import {AddonItem} from "../../../common/booking/addon-item";
import {Booking} from "../../../common/booking/booking";

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.css']
})
export class BookingInfoComponent implements OnInit {
  extras: Extras = {
    addonList: [
      new AddonItem('Breakfast', 'juice', 1.40, 1),
      new AddonItem('Breakfast', 'croissant', 0.90, 1),
      new AddonItem('Breakfast', 'toast', 1.00, 1),
    ],
    isPaid: false
  }
  booking: Booking = {
    checkin: new Date('2021-12-22'),
    checkout: new Date('2021-12-24'),
    confirmationCode: "TEST-12345",
    extras: this.extras.addonList,
    extrasPaid: this.extras.isPaid,
    hasAddons: !!this.extras,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
