import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  clicked: boolean = false
  products = [
    {
      name: 'test',
      price: 15,
      inventoryStatus: 'INSTOCK',
      image: 'assets/images/image.jpg',
      fav: true
    },
    {
      name: 'test1',
      price: 15,
      inventoryStatus: 'INSTOCK',
      image: 'assets/images/image.jpg',
      fav: false
    },
    {
      name: 'test2',
      price: 15,
      inventoryStatus: 'INSTOCK',
      image: 'assets/images/image.jpg',
      fav: false
    },
    {
      name: 'test',
      price: 15,
      inventoryStatus: 'INSTOCK',
      image: 'assets/images/image.jpg',
      fav: false
    },
    {
      name: 'test1',
      price: 15,
      inventoryStatus: 'INSTOCK',
      image: 'assets/images/image.jpg',
      fav: false
    },
    {
      name: 'test2',
      price: 15,
      inventoryStatus: 'INSTOCK',
      image: 'assets/images/image.jpg',
      fav: false
    },
    {
      name: 'test',
      price: 15,
      inventoryStatus: 'INSTOCK',
      image: 'assets/images/image.jpg',
      fav: false
    },
    {
      name: 'test1',
      price: 15,
      inventoryStatus: 'INSTOCK',
      image: 'assets/images/image.jpg',
      fav: false
    },
    {
      name: 'test2',
      price: 15,
      inventoryStatus: 'INSTOCK',
      image: 'assets/images/image.jpg',
      fav: false
    },
    {
      name: 'test',
      price: 15,
      inventoryStatus: 'INSTOCK',
      image: 'assets/images/image.jpg',
      fav: false
    },
    {
      name: 'test1',
      price: 15,
      inventoryStatus: 'INSTOCK',
      image: 'assets/images/image.jpg',
      fav: false
    },
    {
      name: 'test2',
      price: 15,
      inventoryStatus: 'INSTOCK',
      image: 'assets/images/image.jpg',
      fav: false
    }
  ];
}
