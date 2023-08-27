import { WishlistService } from './../services/wishlist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  constructor(private wishlistService: WishlistService) { }

  items: any[] = []
  ngOnInit(){
    this.items = this.wishlistService.card
  }
}
