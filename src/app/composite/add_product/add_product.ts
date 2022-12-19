import {Component, EventEmitter, NgModule, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms'
import {Comp_service} from "../comp_service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  standalone: true,
  selector: 'app-user',
  templateUrl: './add_product.html',
  styleUrls: ['./add_product.css'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})

export class add_products implements OnInit {
  productForm = new FormGroup({
    product_id: new FormControl("123"),
    name: new FormControl("unnamed"),
    category: new FormControl("none"),
    price: new FormControl("0")
  });

  last_added: any = ""

  constructor(private comp_service: Comp_service) {
  }

  ngOnInit(): void {}


  submit()
  {
    this.last_added = JSON.stringify(this.productForm.getRawValue())
    this.comp_service.post_page("/create_product", this.last_added).subscribe();
  }




}
