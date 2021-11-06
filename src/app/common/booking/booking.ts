import {RoomsBooked} from "./rooms-booked";
import {AddonItem} from "./addon-item";

export class Booking {
  id?: number;
  bookingUid?: string;
  customerId?: number;
  checkin: Date;
  checkout: Date;
  hasAddons?: boolean;
  extras?: AddonItem[];
  extrasPaid?: boolean;
  notes?: string;
  confirmationCode: string;
  roomsBooked?: RoomsBooked[];
  createdDate?: Date;
  lastModifiedDate?: Date;
  bookingAmount?: number;


  constructor(id: number, bookingUid: string, customerId: number, checkin: Date, checkout: Date, hasAddons: boolean, extras: AddonItem[], notes: string, confirmationCode: string, roomsBooked: RoomsBooked[], createdDate: Date, lastModifiedDate: Date, bookingAmount: number) {
    this.id = id;
    this.bookingUid = bookingUid;
    this.customerId = customerId;
    this.checkin = checkin;
    this.checkout = checkout;
    this.hasAddons = hasAddons;
    this.extras = extras;
    this.notes = notes;
    this.confirmationCode = confirmationCode;
    this.roomsBooked = roomsBooked;
    this.createdDate = createdDate;
    this.lastModifiedDate = lastModifiedDate;
    this.bookingAmount = bookingAmount;
  }
}
