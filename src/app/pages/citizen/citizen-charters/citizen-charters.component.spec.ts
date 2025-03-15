import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenChartersComponent } from './citizen-charters.component';

describe('CitizenChartersComponent', () => {
  let component: CitizenChartersComponent;
  let fixture: ComponentFixture<CitizenChartersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitizenChartersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitizenChartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
