import { DatepickerComponent } from './../datepicker/datepicker.component';
import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-date',
  templateUrl: './range-date.component.html',
  styleUrls: ['./range-date.component.css']
})
export class RangeDateComponent implements OnInit {
  fromDate: Date = new Date();
  endDate: Date = new Date();

  ngOnInit() {
  }

  constructor(public dialog: Dialog) { }

  openDatepicker() {
    let dialogRef = this.dialog.open(DatepickerComponent, {
      data: {
        fromDate: this.fromDate,
        endDate: this.endDate,
      },
    });
  
    
  }

}
