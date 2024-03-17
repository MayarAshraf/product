import { Iproduct } from './../../Model/iproduct';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() prdList:Iproduct[]=[];
  constructor(){
   
  }
}
