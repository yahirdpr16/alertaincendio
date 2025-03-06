import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigadeMarkdownComponent } from './brigade-markdown.component';

describe('BrigadeMarkdownComponent', () => {
  let component: BrigadeMarkdownComponent;
  let fixture: ComponentFixture<BrigadeMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrigadeMarkdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrigadeMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
