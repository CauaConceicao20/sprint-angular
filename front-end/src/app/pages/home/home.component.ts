import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { StorageService } from '../../services/storage.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public constructor(private storageService : StorageService) {
    if (storageService.getDataLogin() == null || storageService.getDataLogin()?.nome != environment.admin) {
      window.location.href = "/login";
    }
  }
}
