import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {

  img1:any="/assets/HotelProjectImages/hotelwalaLogoFinal.png";
  ownerLoginForm!:FormGroup;
  hide :boolean= true;

  constructor(private fb:FormBuilder,
              private route:Router){};

  ngOnInit(){
this.ownerLoginData();
  };
  

  
  ownerLoginData(){
    this.ownerLoginForm=this.fb.group({
     
      OwnerEmail:['',[]],

      OwnerPassword:['',[Validators.required,]],
    })
  };


  Submit(ownerLoginForm:any){
   console.log("ownerLoginForm=======>",ownerLoginForm);
   
    
  }
}
