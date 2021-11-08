export class BusResponse {
  stopId:   string;
  stopName: string;
  busRoute: string;
  busInfos: BusInfo[];

  constructor(stopId: string, stopName: string, busRoute: string, busInfos: BusInfo[]) {
    this.stopId = stopId;
    this.stopName = stopName;
    this.busRoute = busRoute;
    this.busInfos = busInfos;
  }
}

export class BusInfo {
  busNumber: string;
  busRoute:  string;
  busTimes:  BusTime[];

  constructor(busNumber: string, busRoute: string, busTimes: BusTime[]) {
    this.busNumber = busNumber;
    this.busRoute = busRoute;
    this.busTimes = busTimes;
  }
}

export class BusTime {
  busDestination: string;
  minutes:        number;
  arrivalTime:    string;

  constructor(busDestination: string, minutes: number, arrivalTime: string) {
    this.busDestination = busDestination;
    this.minutes = minutes;
    this.arrivalTime = arrivalTime;
  }
}
