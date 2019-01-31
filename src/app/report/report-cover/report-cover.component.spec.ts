import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCoverComponent } from './report-cover.component';

describe('ReportCoverComponent', () => {
  let component: ReportCoverComponent;
  let fixture: ComponentFixture<ReportCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
