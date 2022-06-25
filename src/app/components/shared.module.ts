import { SalesChartComponent } from './sales-chart/sales-chart.component';
import { CardProductComponent } from './card-product/card-product.component';
import { ListCardProductComponent } from './list-card-product/list-card-product.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AngularMaterialModule,
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    SalesSummaryComponent,
    ListCardProductComponent,
    CardProductComponent,
    SalesChartComponent,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    SalesSummaryComponent,
    ListCardProductComponent,
    CardProductComponent,
    SalesChartComponent,
  ]
})
export class SharedModule { }
