export interface BusResponse {
  stopId?:   string;
  stopName?: string;
  busRoute?: string;
  busInfos?: BusInfo[];
}

export interface BusInfo {
  busNumber: string;
  busRoute:  string;
  busTimes:  BusTime[];
}

export interface BusTime {
  busDestination: string;
  minutes:        number;
  arrivalTime:    string;
}
