import { Component, OnInit } from '@angular/core';
import {Micro3_service} from "./micro3_service";

@Component({
  selector: 'app-user',
  templateUrl: './micro3_component.html',
  styleUrls: ['./micro3_component.css']
})

export class micro3_component implements OnInit {

  app_msg : any;

  constructor(private micro3_service: Micro3_service) {
  }

  ngOnInit(): void {
    this.micro3_service.getLanding().subscribe((data)=>this.app_msg = JSON.stringify(data));
  }


}
