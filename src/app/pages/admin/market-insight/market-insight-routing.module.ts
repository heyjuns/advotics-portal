import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketInsightComponent } from './market-insight.component';

const routes: Routes = [
  {
    path: '',
    component: MarketInsightComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketInsightRoutingModule { }
