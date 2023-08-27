import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WishlistService {
    constructor() { }

    private wishlist$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])


    get card(): any[] {
        return this.wishlist$.value
    }

    set card(item: any) {
        const index = this.wishlist$.value.findIndex((innerItem) => innerItem.id === item.id)
        index === -1 && this.wishlist$.next([...this.wishlist$.value, { ...item, quantity: 1 }])
    }
}