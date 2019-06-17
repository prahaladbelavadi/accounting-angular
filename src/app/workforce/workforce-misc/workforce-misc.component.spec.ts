import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkforceMiscComponent } from './workforce-misc.component';

describe('WorkforceMiscComponent', () => {
  let component: WorkforceMiscComponent;
  let fixture: ComponentFixture<WorkforceMiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkforceMiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkforceMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
