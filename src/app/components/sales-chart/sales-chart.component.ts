import { Component, Input, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
};
@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css']
})
export class SalesChartComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
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
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Nett",
          type: "column",
          data: this.randomizeValue(12, 1000)
        },
        {
          name: "Gross",
          type: "column",
          data: this.randomizeValue(12, 1000)
        },
        {
          name: "Average Purchase Value",
          type: "column",
          data: this.randomizeValue(12, 1000)
        },
        {
          name: "Unit Per Transaction",
          type: "column",
          data: this.randomizeValue(12, 1000)
        },
        {
          name: "Average",
          type: "line",
          data: this.randomizeValue(12, 1000)
        },
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001"
      ],
      xaxis: {
        type: "datetime"
      },

    };
  }

  randomizeValue(length: number, multiplier: number) {
    return Array.from({ length }, () => Math.floor(Math.random() * multiplier));
  }
  ngOnInit() {
  }

}
