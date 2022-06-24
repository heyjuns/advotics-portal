import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketInsightRoutingModule } from './market-insight-routing.module';
import { MarketInsightComponent } from './market-insight.component';


@NgModule({
  declarations: [
    MarketInsightComponent
  ],
  imports: [
    CommonModule,
    MarketInsightRoutingModule
  ]
})
export class MarketInsightModule { }
