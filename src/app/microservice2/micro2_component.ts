import { Component, OnInit } from '@angular/core';
import {Micro2_service} from "./micro2_service";

@Component({
  selector: 'app-user',
  templateUrl: './micro2_component.html',
  styleUrls: ['./micro2_component.css']
})

export class micro2_component implements OnInit {

  app_msg : any;

  constructor(private micro2_service: Micro2_service) {
  }

  ngOnInit(): void {
    this.micro2_service.getLanding().subscribe((data)=>this.app_msg = JSON.stringify(data),
      (error)=>{

      });
  }

  logout(): void
  {
    this.micro2_service.get_page("/logout").subscribe((data)=>this.app_msg = JSON.stringify(data));
  }

  delete_account(): void
  {
    this.micro2_service.get_page("/delete_account").subscribe((data)=>this.app_msg = JSON.stringify(data));
  }


}
