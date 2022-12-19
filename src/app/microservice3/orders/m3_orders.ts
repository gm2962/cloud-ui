import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Micro3_service} from "../micro3_service";

@Component({
  selector: 'app-user',
  templateUrl: './m3_orders.html',
  styleUrls: ['./m3_orders.css']
})

export class m3_orders implements OnInit {

  orders : any;

  constructor(private micro3_service: Micro3_service) {
  }

  ngOnInit(): void {
    this.micro3_service.get_page("/orders").subscribe((data)=>this.orders = JSON.stringify(data));
  }

  searchTextChanged(val: any)
  {
    if(val != "") {
      this.micro3_service.get_page("/orders/".concat(val)).subscribe((data) => this.orders = JSON.stringify(data));
    }
  }




}
