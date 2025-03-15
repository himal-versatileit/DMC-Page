import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentAndBeautificationComponent } from './development-and-beautification.component';

describe('DevelopmentAndBeautificationComponent', () => {
  let component: DevelopmentAndBeautificationComponent;
  let fixture: ComponentFixture<DevelopmentAndBeautificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevelopmentAndBeautificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevelopmentAndBeautificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
