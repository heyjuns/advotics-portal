import { IProduct } from './../../types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card-product',
  templateUrl: './list-card-product.component.html',
  styleUrls: ['./list-card-product.component.css']
})
export class ListCardProductComponent implements OnInit {
  @Input() title!: string;
  @Input() products!: IProduct[];
  constructor() { }

  ngOnInit() {
  }

}
