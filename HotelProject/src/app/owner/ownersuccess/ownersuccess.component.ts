import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'Common/apicall.service';
import { CommonService } from 'Common/common.service';


@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.scss']
})
export class OwnersuccessComponent {


  // showFiller = false;
  HotelDetails!:any;
  ownerLoginData:any;
  userHotelsList:any[]=[];
 showTable:any;


  constructor(private route:Router,
              private apiCall:ApicallService,
              private commonService:CommonService,){};


  ngOnInit(){
    console.log("ngOnInitCalling......");
  this.ownerLoginData= this.commonService.useLoginData;
 
  };



   async myHotelDetails(){
    this.showTable = !this.showTable;
    let endpoint:string="HotelDetails";

    // this.apiCall.getApiCall(endpoint).subscribe((response)=>{
    //   this.HotelDetails=response})

    this.HotelDetails = await this.apiCall.getApiCall(endpoint).toPromise()
      console.log("this.HotelDetails=>",this.HotelDetails);
      this.userHotelsList=[];
      if(this.HotelDetails){
        this.hotelDetailsByOwner();
        if(this.userHotelsList.length>0){

        }
        // else{
        //   this.commonService.warningToaster('No Any Hotel Available','Warning',{
        //     timeOut: 10000,
        //     positionClass: 'toast-top-left'
        //   })
        // }
        }
      //   else{
      //     alert("No Owner Data Available")
      // }
   };

   hotelDetailsByOwner(){
     this.HotelDetails.forEach((element:any)=>{
      if(element.HotelEmail===this.ownerLoginData || element.ContactNo===this.ownerLoginData){
          this.userHotelsList.push(element);
      };
     });
     console.log(" this.userHoteslList=>", this.userHotelsList);
     
   };


  hotelRegistrationForm(){
    this.route.navigateByUrl("owner/HotelRegistration")
  };


  
}

