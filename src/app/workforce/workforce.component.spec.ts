import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkforceComponent } from './workforce.component';

describe('WorkforceComponent', () => {
  let component: WorkforceComponent;
  let fixture: ComponentFixture<WorkforceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkforceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
