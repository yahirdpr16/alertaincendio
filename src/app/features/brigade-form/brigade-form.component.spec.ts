import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigadeFormComponent } from './brigade-form.component';

describe('BrigadeFormComponent', () => {
  let component: BrigadeFormComponent;
  let fixture: ComponentFixture<BrigadeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrigadeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrigadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
