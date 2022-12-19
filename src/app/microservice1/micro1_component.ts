import { Component, OnInit } from '@angular/core';
import {Micro1_service} from "./micro1_service";

@Component({
  selector: 'app-user',
  templateUrl: './micro1_component.html',
  styleUrls: ['./micro1_component.css']
})

export class micro1_component implements OnInit {

  app_msg : any;

  constructor(private micro1_service: Micro1_service) {
  }

  ngOnInit(): void {
    this.micro1_service.getLanding().subscribe((data)=>this.app_msg = JSON.stringify(data));
  }


}
