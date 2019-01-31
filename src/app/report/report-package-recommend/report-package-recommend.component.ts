import {Component, OnInit} from '@angular/core';
import {PACKAGES} from '../../config/package';
import {Package} from '../../model/report';

@Component({
  selector: 'app-report-package-recommend',
  templateUrl: './report-package-recommend.component.html',
  styleUrls: ['./report-package-recommend.component.css', '../report-detail/report-detail.component.css']
})
export class ReportPackageRecommendComponent implements OnInit {

  bestPlan: Package = PACKAGES[2];
  anotherPlans: Package[] = [PACKAGES[0], PACKAGES[1]];

  constructor() {
  }

  ngOnInit() {
  }

  buyPackage() {
    alert('购买套餐成功！');
  }
}
