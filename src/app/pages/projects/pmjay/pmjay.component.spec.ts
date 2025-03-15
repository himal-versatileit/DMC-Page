import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmjayComponent } from './pmjay.component';

describe('PmjayComponent', () => {
  let component: PmjayComponent;
  let fixture: ComponentFixture<PmjayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmjayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmjayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
