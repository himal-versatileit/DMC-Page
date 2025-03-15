import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmayComponent } from './pmay.component';

describe('PmayComponent', () => {
  let component: PmayComponent;
  let fixture: ComponentFixture<PmayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
