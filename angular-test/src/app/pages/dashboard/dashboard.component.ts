import { Component, OnInit } from '@angular/core';
import { ActivityDetails } from 'src/app/shared/cosntants/activity-list.constant';
import { SalesActivity } from 'src/app/shared/models/sales-activity.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  salesActivityDetails: Array<SalesActivity> = ActivityDetails;
  ngOnInit(): void {
  }

  

}
