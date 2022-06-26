import { Component, Input, OnInit } from '@angular/core';
type IPresetDate = 0 | -1 | -7 | -30 | 'month' | 'custom';
interface IDateRange {
  label: string;
  value: IPresetDate
}
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  @Input() fromDate!: Date;
  @Input() endDate!: Date;
  presetRange: IDateRange[] = [
    {
      label: 'Today',
      value: 0,
    },
    {
      label: 'Yesterday',
      value: -1,
    },
    {
      label: 'Last 7 days',
      value: -7,
    },
    {
      label: 'Last 30 days',
      value: -30,
    },
    {
      label: 'This Month',
      value: 'month',
    },
    {
      label: 'Custom',
      value: 'custom',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  presetDate(type: IPresetDate) {
    console.log(type);

  }
  applyDate() {

  }
}
