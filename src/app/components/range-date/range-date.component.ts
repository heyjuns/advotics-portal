import { DatepickerComponent } from './../datepicker/datepicker.component';
import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-range-date',
  templateUrl: './range-date.component.html',
  styleUrls: ['./range-date.component.css']
})
export class RangeDateComponent{
  // fromDate: Date = new Date();
  // endDate: Date = new Date();

  // ngOnInit() {
  // }

  // constructor(public dialog: Dialog) { }

  // openDatepicker() {
  //   let dialogRef = this.dialog.open(DatepickerComponent, {
  //     data: {
  //       fromDate: this.fromDate,
  //       endDate: this.endDate,
  //     },
  //   });
  
    
  // }

  selected: any;
alwaysShowCalendars: boolean;
ranges: any = {
  'Today': [moment(), moment()],
  'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
  'Last 7 Days': [moment().subtract(6, 'days'), moment()],
  'Last 30 Days': [moment().subtract(29, 'days'), moment()],
  'This Month': [moment().startOf('month'), moment().endOf('month')],
  'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
}
invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];

isInvalidDate = (m: moment.Moment) =>  {
  return this.invalidDates.some(d => d.isSame(m, 'day') )
}

constructor() {
  this.alwaysShowCalendars = true;
}
}
