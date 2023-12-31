import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'Common/apicall.service';
import { CommonService } from 'Common/common.service';


@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {

  img1:any="/assets/HotelProjectImages/hotelwalaLogoFinal.png";
  ownerLoginForm!:FormGroup;
  hide = true;
  endpoint!:string;
  getOwnerResponse:any;
  validUser:boolean=false;
  

  constructor(private fb:FormBuilder,
              private route:Router,
              private commonService:CommonService,
              private apicall:ApicallService){};


  ngOnInit(){
    this.ownerLoginData();
    this.endpoint=this.commonService.journey;

  };
  
  ownerLoginData(){
    this.ownerLoginForm=this.fb.group({
     
      Email:['',[Validators.required]],

      Password:['',[Validators.required,]],
    })
  };


  ownerLogIn(ownerLoginForm:any){

  if(this.ownerLoginForm.value.Email){
    this.commonService.useLoginData=this.ownerLoginForm.value.Email;
  };
   this.getOwnerData();
   if(this.getOwnerResponse){
    this.isValidUser();
    if(this.validUser){
      this.commonService.sucessToaster('LogIn Successfully','Welcome...',{
        timeOut: 10000,
        positionClass: 'toast-top-right'
      })
      this.route.navigateByUrl("owner/ownersuccess");
    }
    else{
        this.commonService.warningToaster('Please Enter Correct LogIn Details','Warning',{
          timeOut: 10000,
          positionClass: 'toast-top-right'
        })
      
      this.route.navigateByUrl("owner")
    }
   }
  };

 getOwnerData(){
    this.apicall.getApiCall(this.endpoint).subscribe((response)=>{
      this.getOwnerResponse=response;
      console.log("GetApiResponse==>",this.getOwnerResponse);
    
    })
    
  };

  isValidUser(){
   this.getOwnerResponse.forEach((element:any)=>{
    if(element.Email===this.ownerLoginForm.value.Email ||
      element.MobileNo===this.ownerLoginForm.value.Email &&
      element.Password===this.ownerLoginForm.value.Password){
        this.validUser=true;
      }
   });
   return;
  };

}
