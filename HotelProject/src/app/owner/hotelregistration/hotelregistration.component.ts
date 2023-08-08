import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'Common/apicall.service';
import { CommonService } from 'Common/common.service';

@Component({
  selector: 'app-hotelregistration',
  templateUrl: './hotelregistration.component.html',
  styleUrls: ['./hotelregistration.component.scss']    
})
export class HotelregistrationComponent {

  HotelRegistration!:FormGroup;
  hide = true;
  isMatch!:boolean;
  isConfirmMatch!:boolean;
  hotelPostData:any;
  editId: any;
  hotelDataById: any;


  states: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chattisgarh',
    'Delhi',
    'Goa',
    'Gujrat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajsthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarkhand',
    'Uttar Pradesh',
    'West Bengal',
    'Andaman & Nicobar Island',
    'Chandigarh',
    'Dadara & Nagar Haveli',
    'Daman & Diu',
    'Jammu & Kashmir',
    'Ladakh',
    'Lakshadweep',
    'Puducherry',
  ];
 
 

  constructor(private route:Router,
            private formBuilder:FormBuilder,
            private apicall:ApicallService,
            private commonService:CommonService){};

  ngOnInit(){

  this.editId=this.commonService.id;
  this.hotelDataById=this.commonService.HotelDataById;

  this.HotelRegistraionFormData()
  };

  BackToOwnerHome(){
    this.route.navigateByUrl("owner/ownersuccess");
  };

  HotelRegistraionFormData(){

    this.HotelRegistration=this.formBuilder.group({

      firstName : [this.hotelDataById ? this.hotelDataById.OwnerFirstName : "",[Validators.required,Validators.pattern("[a-zA-z]*$"),Validators.minLength(2)]],

      lastName : [this.hotelDataById ? this.hotelDataById.OwnerLastName :"",[Validators.required,Validators.pattern("[a-zA-z]*$"),Validators.minLength(2)]],

      hotelName : [this.hotelDataById ? this.hotelDataById.HotelName :"",[Validators.required,Validators.pattern("[a-zA-z 0-9 ]*$"),Validators.minLength(5)]],

      Email : [this.hotelDataById ? this.hotelDataById.HotelEmail :"",[Validators.required, Validators.email]],

      MobileNo : [this.hotelDataById ? this.hotelDataById.ContactNo :"" ,[Validators.required,Validators.minLength(10),Validators.pattern("[6-9]{1}[0-9]{9}]*")]],

      panDetails : [this.hotelDataById ? this.hotelDataById.PanDetails :'',[Validators.required,Validators.minLength(10),Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],

      Address : [this.hotelDataById ? this.hotelDataById.HotelAddress :'',[Validators.required,Validators.pattern("[a-zA-z 0-9/\-;:.,]*$"),Validators.minLength(10)]],
    
      City : [this.hotelDataById ? this.hotelDataById.City :"",[Validators.required,Validators.pattern("[a-zA-z]*$"),Validators.minLength(2)]],

      PostalCode : [this.hotelDataById ? this.hotelDataById.PostalCode :'',[Validators.required,Validators.pattern("[0-9]*$"),Validators.minLength(6)]],

      State : [this.hotelDataById ? this.hotelDataById.State :'',[Validators.required]],

      HotelMenue : [this.hotelDataById ? this.hotelDataById.HotelMenue :'',[Validators.required]],

      RoomsAvailable : [this.hotelDataById ? this.hotelDataById.RoomsAvailable :'',[Validators.required,Validators.pattern("[0-9]*")]],

      Password : [this.hotelDataById ? this.hotelDataById.Password :'',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/),Validators.minLength(8)]],

    })

  };

  Submit(HotelRegistrationData:any){
    console.log("HotelRegistrationData=>",HotelRegistrationData);
    let endpoint:string="HotelDetails";

    let request={
      "OwnerFirstName": this.HotelRegistration.value.firstName?.replace(/\s+/g," ").trim(),
      "OwnerLastName": this.HotelRegistration.value.lastName?.replace(/\s+/g," ").trim(),
      "HotelName": this.HotelRegistration.value.hotelName?.replace(/\s+/g," ").trim(),
      "HotelEmail": this.HotelRegistration.value.Email?.replace(/\s+/g," ").trim(),
      "ContactNo": this.HotelRegistration.value.MobileNo?.replace(/\s+/g," ").trim(),
      "PanDetails": this.HotelRegistration.value.panDetails?.replace(/\s+/g," ").trim(),
      "HotelAddress": this.HotelRegistration.value.Address?.replace(/\s+/g," ").trim(),
      "City": this.HotelRegistration.value.City?.replace(/\s+/g," ").trim(),
      "PostalCode": this.HotelRegistration.value.PostalCode?.replace(/\s+/g," ").trim(),
      "State": this.HotelRegistration.value.State?.replace(/\s+/g," ").trim(),
      "HotelMenue": this.HotelRegistration.value.HotelMenue?.replace(/\s+/g," ").trim(),
      "RoomsAvailable": this.HotelRegistration.value.RoomsAvailable,
      "Password": this.HotelRegistration.value.Password?.replace(/\s+/g," ").trim(),
      
    };

    if(this.editId){

      this.apicall.patchApiCall(endpoint,request,this.editId).subscribe((result)=>{
        console.log("result=>",result);
        this.commonService.sucessToaster('Edit Hotel Details Successfully','Congratulations...!',{
          timeOut: 5000,
          positionClass: 'toast-top-right'
        })
        
      })

    }
    else{
      this.apicall.postData(endpoint,request).subscribe((resposnse)=>{
        this.hotelPostData=resposnse;
        console.log("this.hotelPostData=>",this.hotelPostData);
        
      });
      this.commonService.sucessToaster('Hotel Details Saved Successfully','Congratulations...!',{
        timeOut: 10000,
        positionClass: 'toast-top-right'
      })
    }

      this.route.navigateByUrl("owner/ownersuccess"); 

  };

  ngOnDestroy(){
    this.commonService.id="";
    this.commonService.HotelDataById={};
  }

}
