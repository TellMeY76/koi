import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPlanComponent } from './report-plan.component';

describe('ReportPlanComponent', () => {
  let component: ReportPlanComponent;
  let fixture: ComponentFixture<ReportPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
