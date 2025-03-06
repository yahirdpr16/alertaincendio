import { Component, Input, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'analytics-charts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics-charts.component.html',
  styleUrl: './analytics-charts.component.scss'
})
export class AnalyticsChartsComponent {
  @ViewChild('expenseChart') expenseChart!: ElementRef;
  @ViewChild('progressChart') progressChart!: ElementRef;
  @Input() chartData: any;

  ngAfterViewInit() {
    this.initExpenseChart();
    this.initProgressChart();
  }

  private initExpenseChart() {
    new Chart(this.expenseChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.chartData.expenses.labels,
        datasets: [{
          data: this.chartData.expenses.data,
          backgroundColor: ['#2C5F2D', '#97BC62', '#FF6B6B', '#FFE66D']
        }]
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
  }

  private initProgressChart() {
    new Chart(this.progressChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.chartData.progress.labels,
        datasets: [{
          label: 'Área Controlada (%)',
          data: this.chartData.progress.data,
          borderColor: '#2C5F2D',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true, max: 100 } }
      }
    });
  }
}
