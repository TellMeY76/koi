import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPackageRecommendComponent } from './report-package-recommend.component';

describe('ReportPackageRecommendComponent', () => {
  let component: ReportPackageRecommendComponent;
  let fixture: ComponentFixture<ReportPackageRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPackageRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPackageRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
