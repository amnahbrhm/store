import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { createQueryString } from 'src/shared/functions/createQueryString';
import { HttpService } from 'src/shared/services/http.service';

@Injectable({ providedIn: 'root' })
export class WishlistService {
    constructor(private http: HttpService) { }

}