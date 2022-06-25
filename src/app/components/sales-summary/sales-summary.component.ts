import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.component.html',
  styleUrls: ['./sales-summary.component.css']
})
export class SalesSummaryComponent implements OnInit {

  @Input() title!: string;
  @Input() price!: number;
  @Input() percentage!: string;
  constructor() { }

  ngOnInit() {
  }

}
