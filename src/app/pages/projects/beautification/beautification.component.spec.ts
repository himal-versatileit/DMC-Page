import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautificationComponent } from './beautification.component';

describe('BeautificationComponent', () => {
  let component: BeautificationComponent;
  let fixture: ComponentFixture<BeautificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeautificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeautificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
