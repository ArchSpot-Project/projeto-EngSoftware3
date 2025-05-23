import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: false
})
export class NavbarComponent {

  /*
  TODO: Injetar serviço para chamar no template (quando implementar a autenticação)
  constructor(public authService: AuthService) {}

  get user() {
    return this.authService.getUser();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  */

  // Temporário para validar funcionamento
  isLoggedIn() {
    return true;
  }
  user = {
    "name" : "Ana"
  }
}
