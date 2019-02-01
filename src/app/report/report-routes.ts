import {Routes} from '@angular/router';
import {ReportComponent} from './report.component';
import {ReportDetailComponent} from './report-detail/report-detail.component';
import {ReportPlanComponent} from './report-plan/report-plan.component';
import {ReportIndexComponent} from './report-index/report-index.component';
import {ReportCoverComponent} from './report-cover/report-cover.component';
import {ReportSinglePageComponent} from './report-single-page/report-single-page.component';
import {ReportPackageRecommendComponent} from './report-package-recommend/report-package-recommend.component';

export const REPORT_ROUTES: Routes = [
  {path: '', component: ReportCoverComponent},
  // {path: 'index', component: ReportIndexComponent},
  {path: 'singlePage', component: ReportSinglePageComponent},
  {path: 'recommend', component: ReportPackageRecommendComponent},
  {path: 'report', component: ReportComponent},
  {path: 'plans', component: ReportPlanComponent},
  {path: 'detail/:id', component: ReportDetailComponent},
];
