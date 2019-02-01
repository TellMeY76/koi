import {BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
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
import {ReportCoverComponent} from './report/report-cover/report-cover.component';
import {ReportSinglePageComponent} from './report/report-single-page/report-single-page.component';
import {ReportPackageRecommendComponent} from './report/report-package-recommend/report-package-recommend.component';
import * as Hammer from 'hammerjs';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'pinch': {enable: false},
    'rotate': {enable: false},
    'swipe': {velocity: 0.3, threshold: 5},
  };
}

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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [{provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
