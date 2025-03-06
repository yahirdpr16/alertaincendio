import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsStatsComponent } from './analytics-stats.component';

describe('AnalyticsStatsComponent', () => {
  let component: AnalyticsStatsComponent;
  let fixture: ComponentFixture<AnalyticsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
