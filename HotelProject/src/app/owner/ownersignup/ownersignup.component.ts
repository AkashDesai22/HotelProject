import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
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
  postApiSignupData!: Object;
  

  constructor(private formBuilder:FormBuilder,
              private commonService:CommonService,
              private apiCallService:ApicallService){};


  ngOnInit(){
this.endpoint =this.commonService.journey;
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

  passwordMatch(){
this.passwordValue=this.ownerSignUpForm.value.Password;
console.log('this.passwordValue=>',this.passwordValue);
if(this.passwordValue===this.confirmPassValue){
this.isMatch=true;
}else{
  this.isMatch=false;
}
  };

  confirmPasswordmatch(){
this.confirmPassValue=this.ownerSignUpForm.value.ConfirmPassword;
console.log('this.confirmPassValue',this.confirmPassValue);
if(this.passwordValue===this.confirmPassValue){
  this.isMatch=true;
  }else{
    this.isMatch=false;
  }
  };


 signUp(ownerSignUpFormData:any){
  
  console.log('ownerSignUpFormData=>',ownerSignUpFormData);

  let requestData={

    FirstName : this.ownerSignUpForm.value.firstName?.split(" ").join(""),

    LastName : this.ownerSignUpForm.value.lastName?.split(" ").join(""),

    Email : this.ownerSignUpForm.value.Email?.split(" ").join(""),

    MobileNo : this.ownerSignUpForm.value.MobileNo?.split(" ").join(""),

    PanCardDetails : this.ownerSignUpForm.value.panDetails?.split(" ").join(""),

    Gender : this.ownerSignUpForm.value.Gender?.split(" ").join(""),

    Address: this.ownerSignUpForm.value.Address?.split(" ").join(""),

    City: this.ownerSignUpForm.value.City?.split(" ").join(""),

    PostalCode: this.ownerSignUpForm.value.PostalCode?.split(" ").join(""),

    Password: this.ownerSignUpForm.value.Password?.split(" ").join(""),

    ConfirmPassword: this.ownerSignUpForm.value.ConfirmPassword?.split(" ").join(""),

  };

     this.apiCallService.postData(this.endpoint,requestData).subscribe((response)=>{

      this.postApiSignupData=response})

console.log("this.postApiSignupData",this.postApiSignupData);

 };


 }



