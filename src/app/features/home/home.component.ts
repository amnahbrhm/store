import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  responsiveOptions: any[] = [];

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        name: 'test',
        price: 15,
        inventoryStatus: 'INSTOCK',
        image: 'assets/images/image.jpg'
      },
      {
        name: 'test1',
        price: 15,
        inventoryStatus: 'INSTOCK',
        image: 'assets/images/image.jpg'
      },
      {
        name: 'test2',
        price: 15,
        inventoryStatus: 'INSTOCK',
        image: 'assets/images/image.jpg'
      },
      {
        name: 'test',
        price: 15,
        inventoryStatus: 'INSTOCK',
        image: 'assets/images/image.jpg'
      },
      {
        name: 'test1',
        price: 15,
        inventoryStatus: 'INSTOCK',
        image: 'assets/images/image.jpg'
      },
      {
        name: 'test2',
        price: 15,
        inventoryStatus: 'INSTOCK',
        image: 'assets/images/image.jpg'
      },
      {
        name: 'test',
        price: 15,
        inventoryStatus: 'INSTOCK',
        image: 'assets/images/image.jpg'
      },
      {
        name: 'test1',
        price: 15,
        inventoryStatus: 'INSTOCK',
        image: 'assets/images/image.jpg'
      },
      {
        name: 'test2',
        price: 15,
        inventoryStatus: 'INSTOCK',
        image: 'assets/images/image.jpg'
      },
      {
        name: 'test',
        price: 15,
        inventoryStatus: 'INSTOCK',
        image: 'assets/images/image.jpg'
      },
      {
        name: 'test1',
        price: 15,
        inventoryStatus: 'INSTOCK',
        image: 'assets/images/image.jpg'
      },
      {
        name: 'test2',
        price: 15,
        inventoryStatus: 'INSTOCK',
        image: 'assets/images/image.jpg'
      }
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'warning'
    }
  }
}
