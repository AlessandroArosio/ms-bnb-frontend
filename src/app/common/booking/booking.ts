import {Extras} from "./extras";
import {RoomsBooked} from "./rooms-booked";

export class Booking {
  id?: number;
  bookingUid?: string;
  customerId?: number;
  checkin: Date | undefined;
  checkout: Date | undefined;
  hasAddons?: boolean;
  extras?: Extras;
  notes?: string;
  confirmationCode: string | undefined;
  roomsBooked?: RoomsBooked[];
  createdDate?: Date;
  lastModifiedDate?: Date;
  bookingAmount?: number;
}
