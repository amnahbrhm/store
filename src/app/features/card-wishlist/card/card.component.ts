import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { ItemsService } from '../../items/items.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  total: number = 0;
  numbers = [1, 2, 3, 4]
  constructor(private service: ItemsService) { }
  cardList: any[] = []
  copiedCardList: any[] = []
  items: any[] = []
  ngOnInit() {
    this.getCardList()
  }
  getCardList() {
    const token = localStorage.getItem('token')
    if (token) {
      this.service.getCardList().subscribe((data: any) => {
        this.cardList = data['list']
        this.copiedCardList = structuredClone(data['list'])
        this.service.getProducts({ list: this.getListAsString(data['list']) }).subscribe((data: any) => {
          this.items = data['items']
          this.calTotal()
        })
      });
    }
  }
  getListAsString(arg0: any): string[] {
    const list: string[] = []
    arg0.forEach((element: any) => {
      list.push(element.id)
    });
    return list
  }
  update(index: number) {
    this.cardList[index].quantity = this.copiedCardList[index].quantity
    this.calTotal()
    this.updateCard()
  }
  remove(index: number){
    this.cardList.splice(index, 1)
    this.items.splice(index, 1)
    // this.cardList[index].quantity = this.copiedCardList[index].quantity
    this.calTotal()
    this.updateCard()
  }
  updateCard() {
    this.service.changCardList(this.cardList).subscribe(() => { })
  }
  calTotal() {
    this.total = 0
    this.items.forEach((element: any, index: number) => {
      this.total += this.cardList[index].quantity * element.price
    });
  }
}
