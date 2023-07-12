import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products=
  [
   {
    name:'LED',
    brand:'SONY',
    price:60000
   },
   {
    name:'Walkman',
    brand:'SONY',
    price:30000
   },
   {
    name:'FRIDGE',
    brand:'Samsung',
    price:80000
   },
   {
    name:'AC',
    brand:'Hitachi',
    price:85000
   },
  ];
}
