import { Component, Input } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { Product } from 'src/app/shared/Models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product?: Product;

  constructor(private basketService: BasketService){}

  addItemToBasket(){
    // If product exists add to basket
    console.log("working?")
    this.product && this.basketService.addItemToBasket(this.product);
    this.product && console.log("working?2");
  }
}
