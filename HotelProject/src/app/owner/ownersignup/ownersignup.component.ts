import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'Common/apicall.service';
import { CommonService } from 'Common/common.service';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {

  ownerSignUpForm!:FormGroup;
  isDisabled = true;
  hide = true;
  passwordValue:any;
  confirmPassValue:any;
  isMatch!:boolean;
  isConfirmMatch!:boolean;
  endpoint!:string;
  postApiSignupData!: any;
  

  constructor(private formBuilder:FormBuilder,
              private commonService:CommonService,
              private apiCallService:ApicallService,
              private route:Router){};

 ngOnInit(){
console.log(".....................");
    
this.endpoint=this.commonService.journey;
console.log("this.endpoint=>",this.endpoint);

this.ownerSignUpFormData();

  };

  ownerSignUpFormData(){

    this.ownerSignUpForm=this.formBuilder.group({

      firstName : ["",[Validators.required,Validators.pattern("[a-zA-z]*$"),Validators.minLength(2)]],

      lastName : ["",[Validators.required,Validators.pattern("[a-zA-z]*$"),Validators.minLength(2)]],

      Email : ["",[Validators.required, Validators.email]],

      MobileNo : [ ,[Validators.required,Validators.minLength(10),Validators.pattern("[6-9]{1}[0-9]{9}]*")]],

      panDetails : ['',[Validators.required,Validators.minLength(10),Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}'),]],

      Gender : ['',[Validators.required,Validators.pattern(/^(Male|Female|Other)$/i)]],

      Address : ['',[Validators.required,Validators.pattern("[a-zA-z 0-9/\-;:.,]*$"),Validators.minLength(10)]],
    
      City : ["",[Validators.required,Validators.pattern("[a-zA-z]*$"),Validators.minLength(2)]],

      PostalCode : [,[Validators.required,Validators.pattern("[0-9]*$"),Validators.minLength(6)]],

      Password : ['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/),Validators.minLength(8)]],

      ConfirmPassword : ['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/),Validators.minLength(8)]],

    })
  }; 

//   passwordMatch(){
// this.passwordValue=this.ownerSignUpForm.value.Password;
// console.log('this.passwordValue=>',this.passwordValue);
// if(this.passwordValue===this.confirmPassValue){
// this.isMatch=true;
// }else{
//   this.isMatch=false;
// }
//   };

//   confirmPasswordmatch(){
// this.confirmPassValue=this.ownerSignUpForm.value.ConfirmPassword;
// console.log('this.confirmPassValue',this.confirmPassValue);
// if(this.passwordValue===this.confirmPassValue){
//   this.isMatch=true;
//   }else{
//     this.isMatch=false;
//   }
//   };


 signUp(ownerSignUpFormData:any){
  
  console.log('ownerSignUpFormData=>',ownerSignUpFormData);

  let requestData={

    FirstName : this.ownerSignUpForm.value.firstName?.replace(/\s+/g," ").trim(),

    LastName : this.ownerSignUpForm.value.lastName?.replace(/\s+/g," ").trim(),

    Email : this.ownerSignUpForm.value.Email?.replace(/\s+/g," ").trim(),

    MobileNo : this.ownerSignUpForm.value.MobileNo?.replace(/\s+/g," ").trim(),

    PanCardDetails : this.ownerSignUpForm.value.panDetails?.replace(/\s+/g," ").trim(),

    Gender : this.ownerSignUpForm.value.Gender,

    Address: this.ownerSignUpForm.value.Address?.replace(/\s+/g," ").trim(),

    City: this.ownerSignUpForm.value.City?.replace(/\s+/g," ").trim(),

    PostalCode: this.ownerSignUpForm.value.PostalCode?.replace(/\s+/g," ").trim(),

    Password: this.ownerSignUpForm.value.Password?.replace(/\s+/g),

    ConfirmPassword: this.ownerSignUpForm.value.ConfirmPassword?.replace(/\s+/g),

  };

     this.apiCallService.postData(this.endpoint,requestData).subscribe((response)=>{
      console.log("response=>",response);
      this.postApiSignupData=response});
      console.log("this.postApiSignupData",this.postApiSignupData);

      this.route.navigateByUrl("ownersuccess/ownersuccess");

//       if(this.postApiSignupData?.id){
//         console.log("this.postApiSignupData?.id=>",this.postApiSignupData?.id)
        
//         this.route.navigateByUrl("ownersuccess/ownersuccess")
//       }
//       else{
//         this.route.navigateByUrl("ownerSignUp/ownerSignUp")
//       };
 };

}



