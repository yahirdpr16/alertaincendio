import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  BadgeCheck,
  CheckCircle
} from 'lucide-angular';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LucideAngularModule,
    RouterLink
  ],
  templateUrl: './formregister.component.html',
  styleUrls: ['./formregister.component.scss']
})
export class FormregisterComponent {
  registerForm: FormGroup;
  registerError = '';
  showPassword = false;

  // Lucide icons
  mailIcon = Mail;
  lockIcon = Lock;
  eyeIcon = Eye;
  eyeOffIcon = EyeOff;
  userIcon = User;
  userCheckIcon = BadgeCheck;
  successIcon = CheckCircle;

  // Estado de registro
  isSubmitting = false;
  isSuccess = false;
  successMessage = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }

    return null;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isSubmitting = true;

      // Simulamos el registro de usuario con un delay para demostración
      setTimeout(() => {
        // User registration model mapping
        const newUser = {
          name: this.registerForm.value.name,
          email: this.registerForm.value.email,
          username: this.registerForm.value.username,
          passwordHash: this.registerForm.value.password
        };

        console.log('Usuario registrado:', newUser);

        // Mostrar mensaje de éxito
        this.isSubmitting = false;
        this.isSuccess = true;
        this.successMessage = '¡Registro exitoso! Redirigiendo a la página de inicio de sesión...';

        // Redirigir después de un delay
        setTimeout(() => {
          this.router.navigate(['/auth']);
        }, 3000); // Redirige después de 3 segundos

        // En un caso real, usarías un servicio:
        // this.authService.register(newUser).subscribe({
        //   next: (response) => {
        //     this.isSubmitting = false;
        //     this.isSuccess = true;
        //     this.successMessage = '¡Registro exitoso! Redirigiendo...';
        //     setTimeout(() => this.router.navigate(['/auth']), 3000);
        //   },
        //   error: (error) => {
        //     this.isSubmitting = false;
        //     this.registerError = error.message || 'Error al registrar usuario';
        //   }
        // });
      }, 1500); // Simulamos demora de procesamiento

    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.registerForm.controls).forEach(field => {
        const control = this.registerForm.get(field);
        control?.markAsTouched();
      });
    }
  }
}
