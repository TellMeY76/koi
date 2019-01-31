import {Component, OnInit} from '@angular/core';
import {REPO_TABS} from '../../config/reportContents';
import {RepoTab} from '../../model/report';

@Component({
  selector: 'app-report-single-page',
  templateUrl: './report-single-page.component.html',
  styleUrls: ['./report-single-page.component.css']
})
export class ReportSinglePageComponent implements OnInit {
  contents = REPO_TABS;
  activeLi: RepoTab = REPO_TABS[0];

  constructor() {
  }

  ngOnInit() {
  }

  selectContent(content: RepoTab) {
    this.activeLi = content;
    this.scrollView('contentTop');
  }

  scrollView(divId: string) {
    document.getElementById(divId).scrollIntoView();
  }
}
