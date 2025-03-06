import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsMapComponent } from './maps-map.component';

describe('MapsMapComponent', () => {
  let component: MapsMapComponent;
  let fixture: ComponentFixture<MapsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapsMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
