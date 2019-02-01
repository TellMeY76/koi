import {Component, OnInit} from '@angular/core';
import {REPO_TABS} from '../../config/reportContents';
import {RepoTab} from '../../model/report';

@Component({
  selector: 'app-report-single-page',
  templateUrl: './report-single-page.component.html',
  styleUrls: ['./report-single-page.component.css']
})
export class ReportSinglePageComponent implements OnInit {
  contents: RepoTab[] = REPO_TABS;
  index = 0;
  swipeIndex: boolean;
  activeLi: RepoTab = REPO_TABS[this.index];

  constructor() {
  }

  ngOnInit() {
  }

  selectContent(content: RepoTab) {
    this.index = content.index;
    this.activeLi = REPO_TABS[this.index];
    this.scrollView('contentTop');
  }

  scrollView(divId: string) {
    document.getElementById(divId).scrollIntoView();
  }

  swipe(dir: string) {
    if (dir === 'right' && this.index !== 0) {
      this.index--;
    } else if (dir === 'left' && this.index < 4) {
      this.index++;
    }
    this.swipeIndex = true;
    this.activeLi = REPO_TABS[this.index];
    this.scrollView('contentTop');
  }
}
