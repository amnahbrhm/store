import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(private cardService: CardService) { }

  items: any[] = []
  ngOnInit(){
    this.items = this.cardService.card
  }
}
