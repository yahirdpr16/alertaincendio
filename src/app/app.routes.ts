import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home-component/home-page/home-page.component';
import { AuthComponent } from './features/auth/auth/auth.component';
import { AnalyticsComponent } from './features/analytics/analytics/analytics.component';
import { MapsComponent } from './features/maps/maps/maps.component';
import { UsersComponent } from './features/users/users/users.component';
import { authGuard } from './core/guards/auth.guard';
import {FormregisterComponent} from './features/auth/formregister/formregister.component';
export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [() => authGuard()]
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
    canActivate: [() => authGuard()]
  },
  {
    path: 'maps',
    component: MapsComponent,
    canActivate: [() => authGuard()]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [() => authGuard()]
  },
  {
    path:'register',
    component: FormregisterComponent

  }
];
