import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SideMenuProperties } from 'src/app/shared/models/side-menu.interface';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  selectedNavigation: SideMenuProperties = {displayValue: 'Dashboard', icon: 'analytics', childRoute: "/dashboard"};

  constructor(private _route: ActivatedRoute,
    private router: Router) { }
  sideMenus: Array<SideMenuProperties> = [ 
    {displayValue: 'Dashboard', icon: 'analytics', childRoute: "/dashboard"},
    {displayValue: 'Task and Assignments', icon: 'assignment', childRoute: "/t&a"},
    {displayValue: 'Stocks', icon: 'done_all', childRoute: "[/]"},
    {displayValue: 'Sales', icon: 'payment', childRoute: "[/]"},
    {displayValue: 'Purchase', icon: 'account_balance_wallet', childRoute: "[/]"},
    {displayValue: 'Production Plan', icon: 'trending_up', childRoute: "[/]"},
    {displayValue: 'Reports', icon: 'description', childRoute: "[/]"}
  ]
  ngOnInit(): void {
  }


  public navigateRoute = (sideNav: SideMenuProperties) => {
    // console.log(sideNav);
    this.router.navigate([sideNav.childRoute])
  }
}
