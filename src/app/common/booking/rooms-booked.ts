export class RoomsBooked {
  id: number | unknown;
  roomType: string;
  roomName: string;
  property: string;
  capacity: number;


  constructor(id: number | unknown, roomType: string, roomName: string, property: string, capacity: number) {
    this.id = id;
    this.roomType = roomType;
    this.roomName = roomName;
    this.property = property;
    this.capacity = capacity;
  }
}
