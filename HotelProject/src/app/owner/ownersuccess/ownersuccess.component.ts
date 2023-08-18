import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApicallService } from 'Common/apicall.service';
import { CommonService } from 'Common/common.service';
import { DialogComponent } from '../dialog/dialog.component';



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
 showHide:boolean=false;
 getHotelDataById:any;
 



  constructor(private route:Router,
              private apiCall:ApicallService,
              private commonService:CommonService,
              public dialog: MatDialog){};


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
        else{
          this.commonService.warningToaster('No Any Hotel Details Available','Warning',{
            timeOut: 10000,
            positionClass: 'toast-top-right'
          })
        }
        }
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

  verticalDot(){
    this.showHide = !this.showHide;
  };

  async delitRecord(id:any){

    const dialogRef = this.dialog.open(DialogComponent, {
      // data: {id:id},
       width: '250px',
       height:'200px'
       
     });

     dialogRef.afterClosed().subscribe((yesValue:any)=>{
      if(yesValue==='YES'){
        this.deletHotelData(id);
        this.myHotelDetails();
        this.showTable = !this.showTable;
      }
     })
  };

  async deletHotelData(id:any){
    let endpoint="HotelDetails";
    await this.apiCall.deleteApiCall(endpoint,id).toPromise();
  };

 async editRecord(id:any){
   this.commonService.id=id;
   let endpoint="HotelDetails";
   this.getHotelDataById=await this.apiCall.getApiCall(endpoint,id).toPromise()
   this.commonService.HotelDataById=this.getHotelDataById;

   this.route.navigateByUrl("owner/HotelRegistration")

  };


  
}

