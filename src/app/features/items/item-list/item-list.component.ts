import { Component } from '@angular/core';
import { WishlistService } from '../../card-wishlist/services/wishlist.service';
import { ItemsService } from '../items.service';
import { ItemsHelperService } from '../items-hepler.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  clicked: boolean = false
  products: any[] = []
  page: number = 1;
  pagination: number = 7
  favList: any;

  constructor(private service: ItemsService, private wishlistService: WishlistService, private helperService: ItemsHelperService) { }
  ngOnInit() {
    this.service.getProduct({ pagination: this.pagination, page: this.page }).subscribe((data: any) => {
      this.products = (data['items'] as []);
      // this.rowsCount = data['rowsCount'];
    });
    this.getWishlist()
  }
  addToWishlist(item: any) {
    this.wishlistService.card = item
  }
  getWishlist() {
    const token = localStorage.getItem('token')
    if (token) {
      this.service.getFavList().subscribe((data: any) => {
        const list = (data['list'] as string[]);
        this.helperService.favList = list
        console.log(JSON.parse(localStorage.getItem('favList') || ''));
      });
    }
    else {
      const list = ["64e52c497b861264bd887e2f", "64e52d217b861264bd887ea9"];
      this.helperService.favList = list
     if(localStorage.getItem('favList') ){
      this.favList = JSON.parse(localStorage.getItem('favList')!)
    }
    }
  }
}