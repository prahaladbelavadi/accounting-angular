import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkforceAttendanceComponent } from './workforce-attendance.component';

describe('WorkforceAttendanceComponent', () => {
  let component: WorkforceAttendanceComponent;
  let fixture: ComponentFixture<WorkforceAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkforceAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkforceAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
