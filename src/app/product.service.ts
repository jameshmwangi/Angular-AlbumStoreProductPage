import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Album } from './album';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';
@Injectable()
export class ProductService {

  constructor(private _http:Http) { }
 private _albumUrl: string = '../assets/album.json';
 getAlbum(id:number):Observable<Album>{
   return this._http.get(this._albumUrl).map((response)=><Album>response.json());
 }
 private _productsUrl: string = '../assets/products.json';
 getProducts():Observable<Product[]>{
   return this._http.get(this._productsUrl).map((response)=><Product[]>response.json());
 }

}
