import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReportComponent} from './report/report.component';
import {REPORT_ROUTES} from './report/report-routes';

const routes: Routes = [
  {path: '', redirectTo: 'report', pathMatch: 'full'},
  {path: 'report', component: ReportComponent, children: REPORT_ROUTES},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
