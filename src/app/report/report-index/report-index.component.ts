import {Component, OnInit} from '@angular/core';
import {REPO_CONTENTS} from '../../config/reportContents';
import {PACKAGES} from '../../config/package';
import {Package} from '../../model/report';

@Component({
  selector: 'app-report-index',
  templateUrl: './report-index.component.html',
  styleUrls: ['./report-index.component.css']
})
export class ReportIndexComponent implements OnInit {
  contents = REPO_CONTENTS;
  openPackages = false;
  packageList: Package[] = PACKAGES;
  openServices: Package = new Package();

  constructor() {
  }

  ngOnInit() {
  }

  clickPackageSelect(divId: string) {
    document.getElementById(divId).scrollIntoView();
  }

  selectPackage(pkg: Package) {
    if (this.openServices['name'] === pkg['name']) {
      this.openServices = new Package();
    } else {
      this.clickPackageSelect('package_0');
      this.openServices = pkg;
    }
  }

  buyPackage() {
    alert('购买套餐成功！');
  }
}
