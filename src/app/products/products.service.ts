import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {
    private baseUrl: string = '/api?aid=1&type=json&encoding=utf-8&fid=251713&categoryType=2&additionalType=2&limit=10';
    constructor(private http: Http) {}
    
    getProducts() {
        let products = this.http.get(this.baseUrl).map(response => response.json().products);      
        return products; 
    }
}