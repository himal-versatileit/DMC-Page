import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpladComponent } from './mplad.component';

describe('MpladComponent', () => {
  let component: MpladComponent;
  let fixture: ComponentFixture<MpladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpladComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MpladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
