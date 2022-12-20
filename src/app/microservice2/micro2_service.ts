import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Micro2_service
{
  service_url = 'https://f71okcna1e.execute-api.us-east-1.amazonaws.com'
  //service_url = 'http://127.0.0.1:5011'
  constructor(private http: HttpClient) {}

  getLanding()
  {
    return this.http.get(this.service_url)
  }

  get_page(page : string)
  {
    return this.http.get(this.service_url.concat(page))
  }


}
