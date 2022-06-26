import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-date',
  templateUrl: './range-date.component.html',
  styleUrls: ['./range-date.component.css']
})
export class RangeDateComponent implements OnInit {
  fromDate: Date = new Date();
  endDate: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
