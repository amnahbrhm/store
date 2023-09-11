import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { ItemsService } from '../../items/items.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [DialogService]
})
export class CardComponent implements OnInit {

  total: number = 0;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  reference: string ='';
  date= new Date();
  constructor(private service: ItemsService, public dialogService: DialogService) { }
  cardList: {id: string, quantity: number, _id: string}[] = []
  copiedCardList: {id: string, quantity: number, _id: string}[] = []
  items: any[] = []
  ref: DynamicDialogRef | undefined;
    
  ngOnInit() {
    this.date.setDate(this.date.getDate()+ 10)
    this.getCardList()
  }
  getCardList() {
    const token = localStorage.getItem('token')
    if (token) {
      this.service.getCardList().subscribe((data: any) => {
        this.cardList = structuredClone(data['list'])
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
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  checkout(){
    this.showDialog()
    this.cardList = []
    this.items = []
    this.updateCard()
    this.total = 0
    this.reference = this.makeid(24)
  }

  makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
}
