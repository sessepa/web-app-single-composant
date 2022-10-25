import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductsModel} from "../model/products.model";

@Injectable({providedIn:"root"})
export class ProductsService{

constructor(private http:HttpClient) {
}
getAllProducts():Observable<ProductsModel[]>{
  let host=environment.host;
  return this.http.get<ProductsModel[]>(host+"/products");
}
  getSelectedProducts():Observable<ProductsModel[]>{
    let host=environment.host;
    return this.http.get<ProductsModel[]>(host+"/products/?selected=true");
  }
  getAvailableProducts():Observable<ProductsModel[]>{
    let host=environment.host;
    return this.http.get<ProductsModel[]>(host+"/products/?available=true");
  }

}
