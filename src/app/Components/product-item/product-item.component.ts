import { Component } from '@angular/core';
import { Iproduct } from '../../Model/iproduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  prdList2:Iproduct[]=[];
  constructor(){
     this.prdList2=[
      {id:1,name:'Product1',price:100,quantity:0,img:'https://picsum.photos/200/200'},
      {id:2,name:'Product2',price:125,quantity:1,img:'https://picsum.photos/200/200'},
      {id:3,name:'Product3',price:155,quantity:2,img:'https://picsum.photos/200/200'},
      {id:3,name:'Product4',price:100,quantity:12,img:'https://picsum.photos/200/200'},
    ]
  }

}
