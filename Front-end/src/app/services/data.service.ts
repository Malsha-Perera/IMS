import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private http:Http) { }

  getProductItems(){
    return this.http.get('http://localhost:3000/api/items').map(res=>res.json());
  }
  addProductItem(newItem){
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/item',newItem,{headers:headers}).map(res=>res.json());
  }
  deleteproduct(id)
  {
    return this.http.delete('http://localhost:3000/api/item/' + id)
      .map(res => res.json());
  }
  updateproduct(newItem){
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/api/item/'+ newItem._id,newItem,{headers:headers}).map(res=>res.json());


  }

}
