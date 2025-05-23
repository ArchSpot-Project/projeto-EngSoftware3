import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { UserCredentials } from '../../../core/models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const credentials: UserCredentials = {
      email: this.email,
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: user => {
        this.authService.setCurrentUser(user);
        this.router.navigate(['/home']);
      },
      error: () => this.error = true
    });
  }
}
