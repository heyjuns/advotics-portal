import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
interface IBasicRoute {
  url: string;
  label: string;
  iconPath: string;
}
const BASE_ICON_PATH = './assets'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

  pages: IBasicRoute[] = [
    {
      url: 'market-insight',
      label: 'Market Insight',
      iconPath: `${BASE_ICON_PATH}/dashboard-icon.svg`,
    },
    {
      url: 'report',
      label: 'Report',
      iconPath: `${BASE_ICON_PATH}/report.svg`
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
