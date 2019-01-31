import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-report-cover',
  templateUrl: './report-cover.component.html',
  styleUrls: ['./report-cover.component.css']
})
export class ReportCoverComponent implements OnInit {
  dateNow: string;

  constructor() {
  }

  ngOnInit() {
    const date = new Date();
    this.dateNow = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  }

}
