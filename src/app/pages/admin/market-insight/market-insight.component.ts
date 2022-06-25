import { IProduct } from './../../../types/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-insight',
  templateUrl: './market-insight.component.html',
  styleUrls: ['./market-insight.component.scss']
})
export class MarketInsightComponent implements OnInit {
  listOfBestSellingSKU: IProduct[] = [
    {
      name: 'Bebelac 3',
      price: Math.round(Math.random() * 10 * 10000),
      soldQty: Math.round(Math.random() * 10 * 10),
      imgPath: './assets/bebelac3.jpg',
    },
    {
      name: 'BMT',
      price: Math.round(Math.random() * 10 * 10000),
      soldQty: Math.round(Math.random() * 10 * 10),
      imgPath: './assets/bmt.jpg',
    },
    {
      name: 'Primamil',
      price: Math.round(Math.random() * 10 * 10000),
      soldQty: Math.round(Math.random() * 10 * 10),
      imgPath: './assets/primamil.jpeg',
    },
    {
      name: 'SGM Ananda',
      price: Math.round(Math.random() * 10 * 10000),
      soldQty: Math.round(Math.random() * 10 * 10),
      imgPath: './assets/sgmananda.jpg',
    },
  ].sort((a, b) => a.price - b.price);
  listOfTopCompetitorSKU: IProduct[] = [
    {
      name: 'Bebelac 3',
      price: Math.round(Math.random() * 10 * 10000),
      soldQty: Math.round(Math.random() * 10 * 10),
      imgPath: './assets/bebelac3.jpg',
    },
    {
      name: 'BMT',
      price: Math.round(Math.random() * 10 * 10000),
      soldQty: Math.round(Math.random() * 10 * 10),
      imgPath: './assets/bmt.jpg',
    },
    {
      name: 'Primamil',
      price: Math.round(Math.random() * 10 * 10000),
      soldQty: Math.round(Math.random() * 10 * 10),
      imgPath: './assets/primamil.jpeg',
    },
    {
      name: 'SGM Ananda',
      price: Math.round(Math.random() * 10 * 10000),
      soldQty: Math.round(Math.random() * 10 * 10),
      imgPath: './assets/sgmananda.jpg',
    },
  ].sort((a, b) => a.soldQty - b.soldQty)
  constructor() {
  }

  ngOnInit(): void {
  }

}
