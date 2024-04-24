import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
// we create some prperty inside the Class 
export class ContainerComponent {
//   name : string = "achraf bogryn";
//   AddToCart : number = 0;
//   // name : string  = "iohone";
//   // price : number = 999;
//   // color : string = 'gold';
//   // Disconted : number = 100;
//   // we can use object in this class his name is Product
// Product = {
//   name  : "iphone",
//   price  : 999,
//   color  : 'gold',
//   Disconted  : 19,
//   instock : 8,
//   PImage : '/assets/image/Iphone.jpg'
// }
// getDiscountPrice() {
//   return this.Product.price - (this.Product.price * this.Product.Disconted/100)
// }
// onNameChange(event : any){
//   this.name= event.target.value;
//   // console.log(event.target.value);
//   // this.name="change"; 
// }
// decrementCartValue(){
//  if(this.AddToCart > 0){
//   this.AddToCart --;
//  }
 
// }
// incrementClickValue(){
// if(this.AddToCart < this.Product.instock){
//   this.AddToCart ++;
// }
// }
// listOfString : string[] = ['achraf','soukaina','hamza','baha','ajch'];
serahcText: string = '';

setSearchText(value : string){
this.serahcText = value;
}
}
