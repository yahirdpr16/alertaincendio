import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsMapComponent } from '../maps-map/maps-map.component';
import { MapsSidebarComponent } from '../maps-sidebar/maps-sidebar.component';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [CommonModule,MapsMapComponent,MapsSidebarComponent],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.scss'
})
export class MapsComponent {

}
