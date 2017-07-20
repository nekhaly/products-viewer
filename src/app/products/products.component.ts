import { Component, Injectable, Pipe, PipeTransform } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  providers: [ProductsService]
})

export class ProductsComponent {
  constructor(private productsService: ProductsService) { }
  productsList = this.productsService.getProducts();
}

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}