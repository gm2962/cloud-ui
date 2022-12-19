import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Micro3_service} from "../micro3_service";

@Component({
  selector: 'app-user',
  templateUrl: './m3_users.html',
  styleUrls: ['./m3_users.css']
})

export class m3_users implements OnInit {

  users : any;

  constructor(private micro3_service: Micro3_service) {
  }

  ngOnInit(): void {
    this.micro3_service.get_page("/users").subscribe((data)=>this.users = JSON.stringify(data));
  }

  searchTextChanged(val: any)
  {
    if(val != "") {
      this.micro3_service.get_page("/users/".concat(val)).subscribe((data) => this.users = JSON.stringify(data));
    }
  }




}
