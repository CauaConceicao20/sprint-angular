import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';
import { VehicleService } from '../../services/vehicle.service';
import { Veiculo, Veiculos } from '../../models/vehicle.model';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  public selectedVehicle?: Veiculo;

  public vehicles!: Veiculos;

  public constructor(private vehicleService: VehicleService) {
    this.vehicleService.getVehicles().subscribe({
      next: (veiculos) => {
        this.vehicles = veiculos.vehicles;
        this.getVehicleById(1);
      }
    }
    );
    
  }

  public getVehicleById(id : Number) : void {
    for(let vehicle of this.vehicles) {
      if(vehicle.id === id) {
        this.selectedVehicle = vehicle;
      }
    }
  }
}
