import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'Common/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor( private  route : Router,
    private commonService : CommonService,){};

  // logo="src\assets\HotelProjectImages\Hotelwala.png";
 
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
}
