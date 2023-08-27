import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CardService {
    constructor() { }

    private card$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])


    get card(): any[] {
        return this.card$.value
    }

    set card(item: any) {
        const index = this.card$.value.findIndex((innerItem) => innerItem.id === item.id)
        index === -1
            ? this.card$.next([...this.card$.value, { ...item, quantity: 1 }])
            : this.card$.value[index].quantity = this.card$.value[index].quantity + 1
    }
}