import { Injectable } from '@angular/core';
import { User, UserCredentials } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/users/login';
  private currentUser: User | null = null;

  constructor(private http: HttpClient) { }

  login(credentials: UserCredentials): Observable<User> {
    return this.http.post<User>(this.apiUrl, credentials);
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  logout() {
    this.currentUser = null;
  }

  getUser(): User | null {
    return this.currentUser;
  }
}
