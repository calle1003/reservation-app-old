import { Component } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss',
})
export class ProductListComponent {
  products: any;

  ngOnInit() {
    this.products = products;
  }
}
