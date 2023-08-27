import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ItemsHelperService {
    constructor() { }
    private list: { [key: string]: boolean; } = {};

    set favList(list: string[]) {
        list.forEach((element: string) => {
            this.list[element] = true
        })
        localStorage.setItem('favList', JSON.stringify(this.list))
    }

    // get favList(): { [key: string]: boolean; } {
    //     return this.list
    // }
}

