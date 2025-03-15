import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsComplexComponent } from './sports-complex.component';

describe('SportsComplexComponent', () => {
  let component: SportsComplexComponent;
  let fixture: ComponentFixture<SportsComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportsComplexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportsComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
