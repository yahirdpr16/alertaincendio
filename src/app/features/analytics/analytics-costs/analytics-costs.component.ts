import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'analytics-costs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics-costs.component.html',
  styleUrl: './analytics-costs.component.scss'
})
export class AnalyticsCostsComponent {
  @Input() expenses: any[] = [];
}
