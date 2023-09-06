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
  favList: { [key: string]: boolean } = {};
  cardList: { [key: string]: string | number }[] = []
  constructor(private service: ItemsService, private wishlistService: WishlistService, private helperService: ItemsHelperService) { }
  ngOnInit() {
    this.service.getProduct({ pagination: this.pagination, page: this.page }).subscribe((data: any) => {
      this.products = (data['items'] as []);
    });
    this.getWishlist()
    this.getCardList()
    console.log('hey');

  }
  getCardList() {
    const token = localStorage.getItem('token')
    if (token) {
      this.service.getCardList().subscribe((data: any) => {
        this.cardList = data['list']
      });
    }
  }
  addToWishlist(item: any) {
    const favList = JSON.parse(localStorage.getItem('favList')!)
    favList[item._id] = !favList[item._id]
    localStorage.setItem('favList', JSON.stringify(favList))
    this.favList = favList
    this.helperService.favListToString = favList
    const token = localStorage.getItem('token')
    if (token)
      this.service.changFavList(this.helperService.favListToString).subscribe(() => { })
  }
  getWishlist() {
    const token = localStorage.getItem('token')
    if (token) {
      this.service.getFavList().subscribe((data: any) => {
        const list = (data['list'] as string[]);
        this.helperService.favList = list
        this.favList = this.helperService.favList
      });
    }
    else {
      if (localStorage.getItem('favList')) {
        this.favList = JSON.parse(localStorage.getItem('favList')!)
      }
      else {
        localStorage.setItem('favList', JSON.stringify({}))
      }
    }
  }

  addToCard(item: any) {
    console.log(item);
    const index = this.cardList.findIndex((Item)=> Item['id'] === item._id)
    if(index === -1){
      this.cardList.push({ id: item._id, quantity: 1 })
    }
    else {
      this.cardList[index]['quantity'] = ++(this.cardList[index]['quantity'] as number)
    }
    this.service.changCardList(this.cardList).subscribe(() => { })
  }
}