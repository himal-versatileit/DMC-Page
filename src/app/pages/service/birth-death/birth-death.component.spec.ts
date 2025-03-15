import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthDeathComponent } from './birth-death.component';

describe('BirthDeathComponent', () => {
  let component: BirthDeathComponent;
  let fixture: ComponentFixture<BirthDeathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BirthDeathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BirthDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
