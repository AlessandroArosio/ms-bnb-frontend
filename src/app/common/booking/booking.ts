import {Extras} from "./extras";
import {RoomsBooked} from "./rooms-booked";

export class Booking {
  id?: number;
  bookingUid?: string;
  customerId?: number;
  checkin: Date;
  checkout: Date;
  hasAddons?: boolean;
  extras?: Extras;
  notes?: string;
  confirmationCode: string;
  roomsBooked?: RoomsBooked[];
  createdDate?: Date;
  lastModifiedDate?: Date;
  bookingAmount?: number;
}
