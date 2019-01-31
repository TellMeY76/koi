import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSinglePageComponent } from './report-single-page.component';

describe('ReportSinglePageComponent', () => {
  let component: ReportSinglePageComponent;
  let fixture: ComponentFixture<ReportSinglePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSinglePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
