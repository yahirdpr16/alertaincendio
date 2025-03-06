import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsSidebarComponent } from './maps-sidebar.component';

describe('MapsSidebarComponent', () => {
  let component: MapsSidebarComponent;
  let fixture: ComponentFixture<MapsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapsSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
