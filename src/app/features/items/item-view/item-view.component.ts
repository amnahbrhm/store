import { Component } from '@angular/core';
import { CardService } from '../../card-wishlist/services/card.service';
import { ItemsService } from '../items.service';
import { ActivatedRoute } from '@angular/router';
import { ItemsHelperService } from '../items-hepler.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent {
  constructor(private service: ItemsService, private cardService: CardService, private route: ActivatedRoute) { }
  item: any

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getProduct({ id }).subscribe((data: any) => {
      this.item = data;
    });
  }
  addToCard() {
    this.cardService.card = this.item
  }
}
