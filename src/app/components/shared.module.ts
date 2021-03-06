import { DatepickerComponent } from './datepicker/datepicker.component';
import { RangeDateComponent } from './range-date/range-date.component';
import { SalesChartComponent } from './sales-chart/sales-chart.component';
import { CardProductComponent } from './card-product/card-product.component';
import { ListCardProductComponent } from './list-card-product/list-card-product.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';
import { AngularMaterialModule } from '../angular-material.module';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot(),
    RouterModule,
    AngularMaterialModule,
    NgApexchartsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    SalesSummaryComponent,
    ListCardProductComponent,
    CardProductComponent,
    SalesChartComponent,
    RangeDateComponent,
    DatepickerComponent,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    SalesSummaryComponent,
    ListCardProductComponent,
    CardProductComponent,
    SalesChartComponent,
    RangeDateComponent,
    DatepickerComponent,
  ]
})
export class SharedModule { }
