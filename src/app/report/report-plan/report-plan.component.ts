import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SCHEDULES} from '../../config/reportDetails';
import {RepoSchedule} from '../../model/report';

@Component({
  selector: 'app-report-plan',
  templateUrl: './report-plan.component.html',
  styleUrls: ['./report-plan.component.css', '../../../assets/css/schedule.css']
})
export class ReportPlanComponent implements OnInit, AfterViewInit {
  scheduleList: RepoSchedule[] = SCHEDULES;
  activeLi: RepoSchedule;

  constructor() {
  }

  ngOnInit() {
  }

  scrollView(divId: string) {
    document.getElementById(divId).scrollIntoView();
  }

  ngAfterViewInit(): void {
    document.getElementById('schedule_0').scrollIntoView();
  }
}
