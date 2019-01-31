import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {REPO_DETAILS, SCHEDULES} from '../../config/reportDetails';
import {RepoDetail, RepoSchedule} from '../../model/report';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css', '../../../assets/css/schedule.css']
})
export class ReportDetailComponent implements OnInit {
  info: RepoDetail = new RepoDetail();
  schedule: RepoSchedule = new RepoSchedule();

  constructor(private routerInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    const detailId = this.routerInfo.snapshot.params['id'];
    this.info = REPO_DETAILS[detailId];
    this.schedule = SCHEDULES[detailId];
  }
}
