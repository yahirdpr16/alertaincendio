import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LucideAngularModule, Mail, Lock, Eye, EyeClosed} from 'lucide-angular';

@Component({
  selector: 'authformlogin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './authformlogin.component.html',
  styleUrl: './authformlogin.component.scss'
})
export class AuthformloginComponent {
  readonly mailIcon = Mail;
  readonly lockIcon = Lock;
  readonly eyeIcon = Eye;
  readonly eyeOffIcon = EyeClosed;

  authForm: FormGroup;
  showPassword = false;
  loginError = false;

  // Usuario falso para pruebas
  fakeUser = {
    email: 'usuario@ejemplo.com',
    password: 'password123'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    // Para depuración
    console.log('AuthFormLoginComponent inicializado');
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    console.log('Formulario enviado', this.authForm.value);

    if (this.authForm.valid) {
      const { email, password } = this.authForm.value;
      console.log('Credenciales ingresadas:', email, password);
      console.log('Credenciales esperadas:', this.fakeUser.email, this.fakeUser.password);

      // Simulación de autenticación con usuario falso
      if (email === this.fakeUser.email && password === this.fakeUser.password) {
        console.log('Autenticación exitosa, redirigiendo a home');

        // Almacenar información de sesión en localStorage (simulación)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify({ email: email }));

        // Redirigir a la página de inicio
        this.router.navigate(['/home']).then(
          success => console.log('Navegación exitosa:', success),
          error => console.error('Error en navegación:', error)
        );
      } else {
        // Mostrar error de login
        this.loginError = true;
        console.log('Credenciales incorrectas');
      }
    } else {
      console.log('Formulario inválido:', this.authForm.errors);
      // Marcar todos los campos como tocados para mostrar errores
      Object.keys(this.authForm.controls).forEach(key => {
        const control = this.authForm.get(key);
        control?.markAsTouched();
        console.log(`Control ${key} errores:`, control?.errors);
      });
    }
  }
}
