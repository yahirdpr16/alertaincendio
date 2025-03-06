import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'analytics-stats',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './analytics-stats.component.html',
  styleUrl: './analytics-stats.component.scss'
})
export class AnalyticsStatsComponent {
  @Input() selectedFire = 'fire1';
  @Output() fireChange = new EventEmitter<string>();

  onFireChange() {
    this.fireChange.emit(this.selectedFire);
  }
}
