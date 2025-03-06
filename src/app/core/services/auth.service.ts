import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  login(username: string, password: string): boolean {
    // Add your login logic here
    this.isLoggedIn = true;
    return true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
