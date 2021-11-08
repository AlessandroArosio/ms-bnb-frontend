import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BusResponse} from "../../common/bus/BusResponse";

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  private baseUrl = 'http://localhost:8080/api/v1/';


  constructor(private http: HttpClient) { }

  fetchLiveBuses() {
    return this.http.get<BusResponse[]>(this.baseUrl + "busInfo/busTimes");
  }
}
