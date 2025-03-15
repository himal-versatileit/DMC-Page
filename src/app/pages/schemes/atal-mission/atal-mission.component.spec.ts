import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtalMissionComponent } from './atal-mission.component';

describe('AtalMissionComponent', () => {
  let component: AtalMissionComponent;
  let fixture: ComponentFixture<AtalMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtalMissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtalMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
