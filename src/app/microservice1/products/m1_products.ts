import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Micro1_service} from "../micro1_service";

@Component({
  selector: 'app-user',
  templateUrl: './m1_products.html',
  styleUrls: ['./m1_products.css']
})

export class m1_products implements OnInit {

  products : any;

  constructor(private micro1_service: Micro1_service) {
  }

  ngOnInit(): void {
    this.micro1_service.get_page("/products").subscribe((data)=>this.products = JSON.stringify(data));
  }

  searchTextChanged(val: any)
  {
    if(val != "") {
      this.micro1_service.get_page("/products/".concat(val)).subscribe((data) => this.products = JSON.stringify(data));
    }
  }




}
