import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  pageTitle: string = 'Product List';
  products: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  isEmpty(): boolean {
    return this.products.length === 0;
  }

}
