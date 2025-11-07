import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Vehicle } from "../models/vehicle.model";

@Injectable ({
    providedIn: 'root'
})
export class VehicleService {

  private urlVehicle = `${environment.api}/vehicles`;
  private urlVehicleData = `${environment.api}/vehicleData`

  constructor(private httpClient: HttpClient) {}

  getVehicles() {
    return this.httpClient.get<Vehicle[]>(this.urlVehicle);
  }

}