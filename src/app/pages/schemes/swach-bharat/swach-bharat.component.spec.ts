import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwachBharatComponent } from './swach-bharat.component';

describe('SwachBharatComponent', () => {
  let component: SwachBharatComponent;
  let fixture: ComponentFixture<SwachBharatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwachBharatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwachBharatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
