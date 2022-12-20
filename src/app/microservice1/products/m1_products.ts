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

  callpath: any = "";
  filter(offset: any, limit: any)
  {
    this.callpath = "/products?offset="
    if(offset != "") {
      this.callpath = this.callpath.concat(offset)
    }
    else {
      this.callpath = this.callpath.concat("0")
    }

    this.callpath = this.callpath.concat("&limit=")
    if(limit != "") {
      this.callpath = this.callpath.concat(limit)
    }
    else {
      this.callpath = this.callpath.concat("5")
    }

    this.micro1_service.get_page(this.callpath).subscribe((data) => this.products = JSON.stringify(data));

  }




}
