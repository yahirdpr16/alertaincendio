import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'maps-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maps-controls.component.html',
  styleUrl: './maps-controls.component.scss'
})
export class MapsControlsComponent {
  @Output() zoomIn = new EventEmitter<void>();
  @Output() zoomOut = new EventEmitter<void>();
}
