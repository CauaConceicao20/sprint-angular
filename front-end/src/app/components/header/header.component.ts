import { Component} from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public menuAberto?: Boolean = false;

  public constructor(private storageService : StorageService) {}

  public clearDataUser() {
    this.storageService.clearUserData();
  }
}
