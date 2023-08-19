import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'Common/apicall.service';
import { CommonService } from 'Common/common.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent {

  img1:any="/assets/HotelProjectImages/hotelwalalogo.png";
  userLoginForm!:FormGroup;
  hide = true;
  endpoint!:string;
  getUserResponse:any;
  validUser:boolean=false;
  

  constructor(private fb:FormBuilder,
              private route:Router,
              private commonService:CommonService,
              private apicall:ApicallService){};


  ngOnInit(){
    this.userLoginData();
    this.endpoint=this.commonService.journey;

  };
  
  userLoginData(){
    this.userLoginForm=this.fb.group({
     
      Email:['',[Validators.required]],

      Password:['',[Validators.required,]],
    })
  };


  userLogIn(userLoginForm:any){

  if(this.userLoginForm.value.Email){
    this.commonService.useLoginData=this.userLoginForm.value.Email;
  };
   this.getUserData();
   if(this.getUserResponse){
    this.isValidUser();
    if(this.validUser){
      this.commonService.sucessToaster('LogIn Successfully','Welcome...',{
        timeOut: 10000,
        positionClass: 'toast-top-right'
      })
      this.route.navigateByUrl("user/userBooking");
    }
    else{
        this.commonService.warningToaster('Please Enter Correct LogIn Details','Warning',{
          timeOut: 10000,
          positionClass: 'toast-top-right'
        })
      
      this.route.navigateByUrl("userSignupForm")
    }
   }
  };

  getUserData(){
    this.apicall.getApiCall(this.endpoint).subscribe((response)=>{
      this.getUserResponse=response;
      console.log("GetApiResponse==>",this.getUserResponse);
    
    })
    
  };

  isValidUser(){
   this.getUserResponse.forEach((element:any)=>{
    if(element.Email===this.userLoginForm.value.Email ||
      element.MobileNo===this.userLoginForm.value.Email &&
      element.Password===this.userLoginForm.value.Password){
        this.validUser=true;
      }
   });
   return;
  };

}
