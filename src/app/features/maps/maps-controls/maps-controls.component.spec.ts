import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsControlsComponent } from './maps-controls.component';

describe('MapsControlsComponent', () => {
  let component: MapsControlsComponent;
  let fixture: ComponentFixture<MapsControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapsControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
