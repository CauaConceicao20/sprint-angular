import { Component } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { VehicleService } from '../../services/vehicle.service';
import { Observable } from 'rxjs';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  public selectedVehicle?: Vehicle;

  public vehicles$: Observable<Vehicle[]>;

  public constructor(private vehicleService: VehicleService) {
    this.vehicles$ = this.vehicleService.getVehicles();
  }
}
