import { Component, Input, OnInit } from '@angular/core';
import { SalesActivity } from '../../models/sales-activity.interface';

@Component({
  selector: 'app-sales-activity',
  templateUrl: './sales-activity.component.html',
  styleUrls: ['./sales-activity.component.scss']
})
export class SalesActivityComponent implements OnInit {

  constructor() { }

  @Input() salesActivityList:Array<SalesActivity>;

  totalActivity: number = 0;
  ngOnInit(): void {
    this.sumUpSalesCount();
  }

  public sumUpSalesCount = () => {
    this.salesActivityList.forEach(activity => {
      this.totalActivity += activity.count;
    });
    
  }

  

}
