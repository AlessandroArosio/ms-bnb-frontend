import {Component, OnInit} from '@angular/core';
import {BusResponse} from "../../common/bus/BusResponse";
import {TransportService} from "./transport.service";

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {
  busResponse: BusResponse[] = []
  // busResponse: BusResponse[] = [
  //   {
  //     busRoute: 'route',
  //     stopId: 'stop id 3',
  //     stopName: 'Whatever stop name',
  //     busInfos: [
  //       {
  //         busNumber: '2',
  //         busRoute: 'nowhere',
  //         busTimes: [
  //           {
  //             busDestination: 'home',
  //             arrivalTime: 'now',
  //             minutes: 4
  //           },
  //           {
  //             busDestination: 'home',
  //             arrivalTime: 'now',
  //             minutes: 6
  //           },
  //           {
  //             busDestination: 'home',
  //             arrivalTime: 'now',
  //             minutes: 9
  //           }
  //         ]
  //       }]
  //   }
  // ];

  constructor(private transportService: TransportService) {
  }

  ngOnInit(): void {
    let subscription = this.transportService.fetchLiveBuses().subscribe(
      data => {
       this.busResponse = data;
      });
  }

}
