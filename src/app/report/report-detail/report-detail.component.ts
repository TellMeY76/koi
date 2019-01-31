import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {REPO_DETAILS, SCHEDULES} from '../../config/reportDetails';
import {RepoDetail, RepoSchedule} from '../../model/report';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css', '../../../assets/css/schedule.css']
})
export class ReportDetailComponent implements OnChanges {
  @Input() detailId: number;
  info: RepoDetail = new RepoDetail();
  schedule: RepoSchedule = new RepoSchedule();

  constructor() {
  }

  // ngOnInit() {
  //   this.getDetail();
  // }
  //
  // getDetail() {
  //   const detailId = this.routerInfo.snapshot.params['id'];
  //   this.info = REPO_DETAILS[detailId];
  //   this.schedule = SCHEDULES[detailId];
  // }
  getDetail() {
    this.info = REPO_DETAILS[this.detailId];
    this.schedule = SCHEDULES[this.detailId];
  }

  ngOnChanges(): void {
    this.getDetail();
  }
}
