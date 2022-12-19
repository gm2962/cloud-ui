import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Micro3_service
{
  service_url = 'https://2tkq0lzwzh.execute-api.us-east-1.amazonaws.com'
  //service_url = 'http://127.0.0.1:5013'
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
