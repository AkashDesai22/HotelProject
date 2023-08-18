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

  };

  getApiCall(endpoint:any,id?:any){
    let url=id?this.url+endpoint+'/'+id : this.url+ endpoint;
   return this.http.get(url);
   };

   deleteApiCall(endpoint:any,id:any){
    let url=this.url+endpoint+'/'+id;
    return this.http.delete(url);

   };

   patchApiCall(endpoint:any,request:any,id:any){

    let url=this.url+endpoint+'/'+id;

   return this.http.patch(url,request)

   };

   showHotelDetails(){
    
    return this.http.get("http://localhost:3000/HotelDetails?_limit=5");
   };


}
