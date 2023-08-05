import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'Common/apicall.service';

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
            private apicall:ApicallService){};

  ngOnInit(){
    this.HotelRegistraionFormData()
  };

  BackToOwnerHome(){
    this.route.navigateByUrl("owner/ownersuccess");
  };

  HotelRegistraionFormData(){

    this.HotelRegistration=this.formBuilder.group({

      firstName : ["",[Validators.required,Validators.pattern("[a-zA-z]*$"),Validators.minLength(2)]],

      lastName : ["",[Validators.required,Validators.pattern("[a-zA-z]*$"),Validators.minLength(2)]],

      hotelName : ["",[Validators.required,Validators.pattern("[a-zA-z 0-9 ]*$"),Validators.minLength(5)]],

      Email : ["",[Validators.required, Validators.email]],

      MobileNo : [ ,[Validators.required,Validators.minLength(10),Validators.pattern("[6-9]{1}[0-9]{9}]*")]],

      panDetails : ['',[Validators.required,Validators.minLength(10),Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],

      Address : ['',[Validators.required,Validators.pattern("[a-zA-z 0-9/\-;:.,]*$"),Validators.minLength(10)]],
    
      City : ["",[Validators.required,Validators.pattern("[a-zA-z]*$"),Validators.minLength(2)]],

      PostalCode : ['',[Validators.required,Validators.pattern("[0-9]*$"),Validators.minLength(6)]],

      State : ['',[Validators.required]],

      HotelMenue : ['',[Validators.required]],

      RoomsAvailable : ['',[Validators.required,Validators.pattern("[0-9]*")]],

      Password : ['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/),Validators.minLength(8)]],

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

    this.apicall.postData(endpoint,request).subscribe((resposnse)=>{
      this.hotelPostData=resposnse;
      console.log("this.hotelPostData=>",this.hotelPostData);
      
    });
      this.route.navigateByUrl("owner/ownersuccess"); 

  };

}
