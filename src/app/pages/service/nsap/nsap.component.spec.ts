import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsapComponent } from './nsap.component';

describe('NsapComponent', () => {
  let component: NsapComponent;
  let fixture: ComponentFixture<NsapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NsapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NsapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
