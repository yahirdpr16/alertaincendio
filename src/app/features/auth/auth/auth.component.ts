import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthfooterComponent } from '../footer/authfooter/authfooter.component';
import { AuthheaderComponent } from '../header/authheader/authheader.component';
import { AuthformloginComponent } from '../formlogin/authformlogin/authformlogin.component';
import { AuthimageComponent } from "../authimage/authimage.component";
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, AuthfooterComponent, AuthheaderComponent, AuthformloginComponent, AuthimageComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(username: string, password: string): void {
    if (this.authService.login(username, password)) {
      this.router.navigate(['/home']);
    }
  }
}
