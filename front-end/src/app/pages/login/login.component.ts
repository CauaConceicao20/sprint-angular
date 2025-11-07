import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public login?: String;
  public password?: String;

  public constructor(private loginService: LoginService, private router : Router) { }

  public authentication(): void {
    this.loginService.login(this.login!, this.password!).subscribe({
      next: (user: User) => {
        if (user.nome === this.login) {
          this.router.navigate(['/home'])
        }
      },
      error: (err) => {
        console.error("Erro ao autenticar:", err);
        alert("Erro ao autenticar usuário");
      }
    });
  }
}
