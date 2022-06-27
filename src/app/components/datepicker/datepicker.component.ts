import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DateRange, MatCalendar, MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER } from '@angular/material/datepicker';
type IPresetDate = 0 | -1 | -7 | -30 | 'month' | 'custom';
interface IDateRange {
  label: string;
  value: IPresetDate
}
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER]
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

  selectedDateRange!: DateRange<Date>;
  selectDateType!: string;
  constructor(
  ) {
    this.selectedDateRange = new DateRange(this.fromDate, this.endDate)
  }
  toggleStartDateDate(date: Date, calendar: MatCalendar<Date>) {
    const selected_date = date;
    if (this.selectDateType === "startDateAfter") {
      this.fromDate = selected_date
      this.endDate = selected_date
      this.selectDateType = "startDateBefore"
    } else {
      if (date < this.fromDate) {
        this.fromDate = selected_date
        this.endDate = selected_date
        this.selectDateType = "startDateBefore"
      } else {
        this.endDate = selected_date
        this.selectDateType = "startDateAfter"
      }
    }
    this.selectedDateRange = new DateRange(this.fromDate, this.endDate)
    calendar.updateTodaysDate();
  }

  ngOnInit() {
  }

  presetDate(type: IPresetDate) {
    console.log(type);

  }
  applyDate() {
  }
}
