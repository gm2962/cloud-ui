import { Component, OnInit } from '@angular/core';
import {Comp_service} from "./comp_service";

@Component({
  selector: 'app-user',
  templateUrl: './comp_component.html',
  styleUrls: ['./comp_component.css']
})

export class comp_component implements OnInit {

  app_msg : any;

  constructor(private comp_service: Comp_service) {
  }

  ngOnInit(): void {
    this.comp_service.getLanding().subscribe((data)=>this.app_msg = JSON.stringify(data));
  }


}
