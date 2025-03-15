import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionOccupanciesComponent } from './construction-occupancies.component';

describe('ConstructionOccupanciesComponent', () => {
  let component: ConstructionOccupanciesComponent;
  let fixture: ComponentFixture<ConstructionOccupanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstructionOccupanciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstructionOccupanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
