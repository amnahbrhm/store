import { Injectable } from '@angular/core';
import { createQueryString } from 'src/shared/functions/createQueryString';
import { HttpService } from 'src/shared/services/http.service';

@Injectable({providedIn: 'root'})
export class ItemsService {
    products: any[] = []
    page: number = 1;
    pagination: number = 7
    constructor(private http: HttpService) { }
    getProduct(params?: any){
        const query= createQueryString(params)
        return this.http.get(`items${query}`)
    }

    getFavList(){
        return this.http.get(`wishlist`)
    }

    changFavList(list: string[]){
        return this.http.put(`wishlist`, {list})
    }

    getProducts(params?: any){
        const query= createQueryString(params)
        return this.http.get(`items/list${query}`)
    }

    getCardList(){
        return this.http.get(`card`)
    }

    changCardList(list: any[]){
        return this.http.put(`card`, {list})
    }
}