import { Component } from '@angular/core';
import { InfoVehicle } from '../../models/info-vehicle.model';
import { VehicleService } from '../../services/vehicle.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-footer',
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  public infoVehicleFound? : InfoVehicle;

  public constructor(private vehicleService : VehicleService) {}

  public searchInfoVehicle(vin : String) {
    console.log("codigo " + vin);
    this.vehicleService.getInfoVehicles(vin).subscribe(
      infoVehicle => this.infoVehicleFound = infoVehicle
    );
  }
} 
