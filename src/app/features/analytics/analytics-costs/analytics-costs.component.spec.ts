import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCostsComponent } from './analytics-costs.component';

describe('AnalyticsCostsComponent', () => {
  let component: AnalyticsCostsComponent;
  let fixture: ComponentFixture<AnalyticsCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsCostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
