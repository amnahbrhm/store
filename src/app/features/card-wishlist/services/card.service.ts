import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from 'src/shared/services/http.service';

@Injectable({ providedIn: 'root' })
export class CardService {
    constructor(private http: HttpService) { }

    getCardList(){
        return this.http.get(`card`)
    }

    changCardList(list: any){
        return this.http.put(`card`, {list})
    }
}