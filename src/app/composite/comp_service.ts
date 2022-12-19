import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Comp_service
{
  service_url = 'https://47ilvc4ypk.execute-api.us-east-1.amazonaws.com'
  //service_url = 'http://127.0.0.1:5000'
  constructor(private http: HttpClient) {}

  getLanding()
  {
    return this.http.get(this.service_url)
  }

  post_page(page : string, data : any)
  {
    return this.http.post(this.service_url.concat(page), data)
  }


}
