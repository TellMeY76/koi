import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReportComponent} from './report/report.component';
import {ReportIndexComponent} from './report/report-index/report-index.component';
import {ReportDetailComponent} from './report/report-detail/report-detail.component';
import {ReportPlanComponent} from './report/report-plan/report-plan.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { ReportCoverComponent } from './report/report-cover/report-cover.component';
import { ReportSinglePageComponent } from './report/report-single-page/report-single-page.component';
import { ReportPackageRecommendComponent } from './report/report-package-recommend/report-package-recommend.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    ReportIndexComponent,
    ReportDetailComponent,
    ReportPlanComponent,
    ReportCoverComponent,
    ReportSinglePageComponent,
    ReportPackageRecommendComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
