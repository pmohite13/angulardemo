import { Injectable } from "@angular/core";
import { IProduct } from "./Iproduct";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch'

@Injectable()
export class ProductService {

    constructor(private _httpClient : HttpClient){

    }
    getProducts() : Observable<IProduct[]>{
       return this._httpClient.get<IProduct[]>('./api/products/products.json')
       .catch(this.handleError);
    }

    handleError(error : HttpErrorResponse){
        return Observable.throw(error);
    }
}