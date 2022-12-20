import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Micro2_service} from "../micro2_service";

@Component({
  selector: 'app-user',
  templateUrl: './m2_users.html',
  styleUrls: ['./m2_users.css']
})

export class m2_users implements OnInit {

  users : any;
  card : any;
  address: any;

  constructor(private micro2_service: Micro2_service) {
  }

  ngOnInit(): void {
    this.micro2_service.get_page("/users").subscribe((data)=>this.users = JSON.stringify(data));
  }

  searchTextChanged(val: any)
  {
    if(val != "") {
      this.micro2_service.get_page("/users/".concat(val)).subscribe((data) => this.users = JSON.stringify(data));
      this.micro2_service.get_page(("/users/".concat(val)).concat("/cards")).subscribe((data) => this.card = JSON.stringify(data));
      this.micro2_service.get_page(("/users/".concat(val)).concat("/addresses")).subscribe((data) => this.address = JSON.stringify(data));
    }
  }




}
