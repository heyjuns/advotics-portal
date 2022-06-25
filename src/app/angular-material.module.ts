import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatSelectModule
  ]
})
export class AngularMaterialModule { }
