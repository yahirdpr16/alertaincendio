import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { LucideAngularModule, Shield } from 'lucide-angular';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,LucideAngularModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent{
  features = [
    {
      icon: 'alert-triangle',
      title: 'Alertas en Tiempo Real',
      description: 'Notificaciones instantáneas sobre riesgos potenciales de incendio en sus áreas monitoreadas'
    },
    {
      icon: 'map',
      title: 'Mapas Interactivos',
      description: 'Visualice incendios activos, zonas de riesgo y áreas protegidas en tiempo real'
    },
    {
      icon: 'shield',
      title: 'Herramientas de Prevención',
      description: 'Acceda a recursos y guías para la prevención y seguridad contra incendios'
    }

  ];
}
