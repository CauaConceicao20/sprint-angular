import { Component } from '@angular/core';
import { FormsModule, NgModel } from "@angular/forms";
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public login?: String;
  public password?: String;

  public constructor(private loginService: LoginService, private storageService : StorageService , private router: Router) { }

  public authentication(): User | null {
    this.loginService.login(this.login!, this.password!).subscribe({
      next: (user: User) => {
        if (user.nome === this.login) {
          this.router.navigate(['/home']);
          this.storageService.saveData(user);
          return user;
        }
        return null;
      },
      error: (err: Error) => {
        console.error("Erro ao autenticar:", err);
        alert("Erro ao autenticar usuário");
        return null;
      }
    });
    return null;
  }


}
