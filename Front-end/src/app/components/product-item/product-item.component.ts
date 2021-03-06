import { Component, OnInit } from '@angular/core';
import {Item} from "./product";
import {DataService} from "../../services/data.service";


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers:[DataService],
})
export class ProductItemComponent implements OnInit {
  productItemList:Item[]=[];
  productitem:Item[]=[];
  itemname:String;
  itemitem:Item;
  quantity:number;
  description:String;
  selectedItem:Item;
  _id:number
  toggleForm:boolean=false




  constructor(private dataservice:DataService) { }
  getItems(){
    this.dataservice.getProductItems()
      .subscribe(items=>{
        this.productItemList=items;
        //console.log('data from dataservice:'+this.productItemList[0].itemname);
      })

  }
  deleteproduct(id) {

    this.dataservice.deleteproduct(id)
      .subscribe(data => {
        if (data.n == 1) {
          for (var i = 0; i < this.productItemList.length; i++) {
            if (id==this.productItemList[i]._id) {
              this.productitem.splice(i, 1);
              this.getItems();

            }
          }
        }
      })
  }



 addItem(){
   const newItem = {
     itemname: this.itemname,
     quantity: this.quantity,
     description:this.description,

   }
   this.dataservice.addProductItem(newItem)
     .subscribe(item => {
       this.productitem.push(item);
       this.dataservice.getProductItems()
         .subscribe(productitem =>
           this.productitem = productitem);
       this.getItems()
     });
 }
showEditFrm(item){
   this.selectedItem=item;
   this.toggleForm=!this.toggleForm;
 }
/*editproduct(form){
   let newItem :Item={
     _id:this.selectedItem._id,
     itemname:form.value.itemname,
     quantity:form.value.quantity,
     description:form.value.description,


   };

  this.dataservice.updateproduct(newItem)
     .subscribe(result=>{
       console.log('original Item to be updated:'+result);
       this.getItems();
     });
   this.toggleForm=!this.toggleForm;

 }
*/




  ngOnInit() {
   this.getItems();

  }

}
