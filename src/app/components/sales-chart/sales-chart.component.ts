import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css']
})
export class SalesChartComponent implements OnInit {
  @Input() title!: string;
  rangeOptions = [
    {
      label: 'Last 6 Month',
      value: 6
    },
    {
      label: 'Last 3 Month',
      value: 3
    },
    {
      label: 'Last Month',
      value: 1
    },

  ]
  selectedRange = 6;
  constructor() { }

  ngOnInit() {
  }

}
