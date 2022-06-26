import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'market-insight'
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'market-insight',
        loadChildren: () => import('./market-insight/market-insight.module').then(m => m.MarketInsightModule)
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
