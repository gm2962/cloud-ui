import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Micro3_service} from "../micro3_service";

@Component({
  selector: 'app-user',
  templateUrl: './m3_products.html',
  styleUrls: ['./m3_products.css']
})

export class m3_products implements OnInit {

  products : any;

  constructor(private micro3_service: Micro3_service) {
  }

  ngOnInit(): void {
    this.micro3_service.get_page("/products").subscribe((data)=>this.products = JSON.stringify(data));
  }

  searchTextChanged(val: any)
  {
    if(val != "") {
      this.micro3_service.get_page("/products/".concat(val)).subscribe((data) => this.products = JSON.stringify(data));
    }
  }




}
