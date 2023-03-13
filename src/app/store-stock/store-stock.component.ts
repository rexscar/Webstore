import { Component } from '@angular/core';

@Component({
  selector: 'app-store-stock',
  templateUrl: './store-stock.component.html',
  styleUrls: ['./store-stock.component.css']
})
export class StoreStockComponent {
  stockName="hoody";
  hideHeader=false
  toggle(){
  this.hideHeader=!this.hideHeader
  }
}
