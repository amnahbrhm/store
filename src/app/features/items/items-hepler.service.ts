import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ItemsHelperService {
    constructor() { }
    private list: { [key: string]: boolean; } = {};
    private listString: string[] = []

    set favList(list: string[]) {
        this.listString = list
        list.forEach((element: string) => {
            this.list[element] = true
        })
        localStorage.setItem('favList', JSON.stringify(this.list))
        console.log('hey', list);
        
    }

    get favList(): { [key: string]: boolean; } | any {
        return this.list
    }

    set favListToString(list: { [key: string]: boolean; }) {
        // this.listString
        const modivedList: string[] = []
        for (const key in list) {
            if (list[key]) {
                modivedList.push(key as string)
            }
        }
        this.listString = modivedList
    }
    get favListToString(): string[] | any {
        return this.listString
    }
    remove(id: string) {
        this.list[id] = false
        const index = this.listString.findIndex((element: string) => {
            element == id
        });
        this.listString.splice(index, 1)
        this.favList = this.listString 
    }
}

