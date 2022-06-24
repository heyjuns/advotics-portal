import { Component, OnInit } from '@angular/core';
interface IBasicRoute {
  url: string;
  label: string;
  iconPath: string;
}
const BASE_ICON_PATH = './assets'

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pages: IBasicRoute[] = [
    {
      url: 'market-insight',
      label: 'Market Insight',
      iconPath: `${BASE_ICON_PATH}/dashboard-icon.svg`,
    },
    {
      url: 'report',
      label: 'Report',
      iconPath:`${BASE_ICON_PATH}/report.svg`
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
