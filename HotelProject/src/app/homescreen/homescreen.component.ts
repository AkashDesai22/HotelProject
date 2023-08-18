import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'Common/common.service';
import {TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ApicallService } from 'Common/apicall.service';



@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomescreenComponent {

closeResult: string | undefined;
hide:boolean=false;
HotelsList:any;
  
images=["/assets/HotelProjectImages/main.png" ,"/assets/HotelProjectImages/Mumbai.png", "/assets/HotelProjectImages/Goa.png" ,"/assets/HotelProjectImages/Pune.png", "/assets/HotelProjectImages/Delhi.png" , "/assets/HotelProjectImages/Gujrat.png"]



  constructor( private  route : Router,
               private commonService : CommonService,
               private offcanvasService: NgbOffcanvas,
               private apiCall:ApicallService, ){};

   ngOnInit(){

    this.getHotelData();
   };

  journey(journey:string){
    
  if(journey==="user"){
      this.commonService.journey="User";
      this.route.navigateByUrl("user");
     
    }
    else if(journey==="owner"){
      this.commonService.journey="Owner";
      this.route.navigateByUrl("owner");
    }
    else if(journey==="admin"){
      this.commonService.journey="Admin";
      this.route.navigateByUrl("admin");
    }
  };

  openBottom(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'bottom' });
	};

  getHotelData(){
    // let endpoint:string="HotelDetails";
   this.apiCall.showHotelDetails().subscribe((response:any)=>{
    this.HotelsList=response
   })
      console.log("this.HotelsList=>",this.HotelsList);  
  };


}
