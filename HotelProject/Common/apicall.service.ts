import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

url:string= "http://localhost:3000/";


  constructor(private http:HttpClient) { }


  postData(endpoint:any,requestData:any){

    let url=this.url+ endpoint;

      return this.http.post(url,requestData);

  }
}
