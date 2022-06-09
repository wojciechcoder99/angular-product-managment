import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter: string = '';

  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "Product description",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://th.bing.com/th/id/OIP.dU1gbf_iTEwhuzgjZtm1SwHaHa?pid=ImgDet&rs=1"
    },
    {
      "productId": 2,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "March 18, 2021",
      "description": "Product description",
      "price": 50.19,
      "starRating": 4.8,
      "imageUrl": "https://th.bing.com/th/id/R.6e8c7d527a51f85be975e3b87b0d5244?rik=ataGOrt0skhsCg&pid=ImgRaw&r=0"
    }
  ];

  constructor() { }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
  }

  ngOnInit(): void {
  }

  isEmpty(): boolean {
    return this.products.length === 0;
  }

  showOrHideImage(): void {
    this.showImage = !this.showImage;
  }

  assignShowOrHideButtonLabel(): string {
    return this.showImage == true ? 'Hide image' : 'Show image';
  }

  performFilter(): IProduct[] {
    return this.products.filter(prod => prod.productName
      .toLowerCase()
      .includes(this._listFilter));
  }

}
