import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthformloginComponent } from './authformlogin.component';

describe('AuthformloginComponent', () => {
  let component: AuthformloginComponent;
  let fixture: ComponentFixture<AuthformloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthformloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthformloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
