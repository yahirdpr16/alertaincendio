import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);

  // Verificar si estamos en el navegador
  if (typeof window !== 'undefined') {
    // En el navegador, verificar la autenticación
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
      return true;
    } else {
      // No autenticado, redirigir al login
      router.navigate(['/auth']);
      return false;
    }
  }

  // En el servidor, bloquear por defecto para ser conservadores
  // Esto fuerza a que la autenticación siempre se verifique en el cliente
  return false;
};
