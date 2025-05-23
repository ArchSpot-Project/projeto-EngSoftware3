import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: false
})
export class NavbarComponent {

  constructor(public authService: AuthService) {}

  get user() {
    return this.authService.getUser();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
