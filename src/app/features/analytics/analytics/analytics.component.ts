import { Component } from '@angular/core';
import { AnalyticsChartsComponent } from '../analytics-charts/analytics-charts.component';
import { AnalyticsCostsComponent } from '../analytics-costs/analytics-costs.component';
import { AnalyticsHeaderComponent } from '../analytics-header/analytics-header.component';
import { AnalyticsStatsComponent } from '../analytics-stats/analytics-stats.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [AnalyticsChartsComponent,AnalyticsCostsComponent,AnalyticsHeaderComponent,AnalyticsStatsComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {
  selectedFire = 'fire1';
  chartData = {
    expenses: {
      labels: ['Personal y Brigadas', 'Equipamiento', 'Logística', 'Recursos Aéreos'],
      data: [43.3, 30, 16.7, 10]
    },
    progress: {
      labels: ['Día 1', 'Día 2', 'Día 3'],
      data: [20, 45, 60]
    }
  };

  expenses = [
    { category: 'Personal y Brigadas', amount: 65000, percentage: 43.3, status: 'Pagado' },
    { category: 'Equipamiento', amount: 45000, percentage: 30, status: 'En proceso' },
    { category: 'Logística', amount: 25000, percentage: 16.7, status: 'Pagado' },
    { category: 'Recursos Aéreos', amount: 15000, percentage: 10, status: 'Pendiente' }
  ];

  onFireChange(fireId: string) {
    this.selectedFire = fireId;
  }
}
