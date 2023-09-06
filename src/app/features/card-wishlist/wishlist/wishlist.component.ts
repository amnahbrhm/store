import { ItemsHelperService } from '../../items/items-hepler.service';
import { ItemsService } from '../../items/items.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  constructor(private itemsService: ItemsService, private helperService: ItemsHelperService) { }

  items: any[] = []
  favList: string[] = []

  ngOnInit() {
    this.getWishlist()
  }
  getWishlist() {
    const token = localStorage.getItem('token')
    if (token) {
      this.itemsService.getFavList().subscribe((data: any) => {
        const list = (data['list'] as string[]);
        this.helperService.favList = list
        this.favList = list
        this.itemsService.getProducts({ list }).subscribe((data: any) => {
          this.items = data['items']
        })
      });
    }
    else {
      if (localStorage.getItem('favList')) {
        const list = JSON.parse(localStorage.getItem('favList')!)
        this.helperService.favListToString = list
        this.favList = this.helperService.favListToString
        this.itemsService.getProducts({ list: this.helperService.favListToString }).subscribe((data: any) => {
          this.items = data['items']
        })
      }
      else {
        localStorage.setItem('favList', JSON.stringify({}))
      }
    }
  }
  remove(product: any, index: number) {
    console.log(product);
    
    console.log(index);
    this.helperService.remove(product._id)
    this.favList = this.helperService.favListToString
    const token = localStorage.getItem('token')
    if (token) {
      this.itemsService.changFavList(this.helperService.favListToString).subscribe(() => {
        this.items.splice(index, 1)
      })
    }
    else {
      this.items.splice(index, 1)
    }
  }
}
