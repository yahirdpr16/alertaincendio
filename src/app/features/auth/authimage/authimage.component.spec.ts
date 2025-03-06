import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthimageComponent } from './authimage.component';

describe('AuthimageComponent', () => {
  let component: AuthimageComponent;
  let fixture: ComponentFixture<AuthimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
