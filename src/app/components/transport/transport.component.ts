import {Component, OnInit} from '@angular/core';
import {BusResponse} from "../../common/bus/BusResponse";

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {
  busResponse: BusResponse[] = [
    {
      busRoute: 'route',
      stopId: 'stop id 3'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
