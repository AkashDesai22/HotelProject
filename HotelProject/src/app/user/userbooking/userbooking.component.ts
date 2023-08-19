import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'Common/apicall.service';

@Component({
  selector: 'app-userbooking',
  templateUrl: './userbooking.component.html',
  styleUrls: ['./userbooking.component.scss']
})
export class UserbookingComponent {
  HotelsList:any;
  
  
  
  constructor(private apiCall:ApicallService,
              private route:Router,){};

  ngOnInit(){
    this.showHotelDetails();
  };
  
  showHotelDetails(){
    let endPoint:string="HotelDetails";
    this.apiCall.getApiCall(endPoint).subscribe((response)=>{
      this.HotelsList=response;
      console.log("hotelData=>",this.HotelsList);
    })

  };


}
