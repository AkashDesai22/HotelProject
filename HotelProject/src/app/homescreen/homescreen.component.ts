import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'Common/common.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent {



  constructor( private  route : Router,
               private commonService : CommonService){};

  ngOnInit(){};

  journey(journey:string){
    
  if(journey==="user"){
      this.commonService.journey="user";
      this.route.navigateByUrl("user");
    }
    else if(journey==="owner"){
      this.commonService.journey="Owner";
      this.route.navigateByUrl("owner");
    }
    else if(journey==="admin"){
      this.commonService.journey="admin";
      this.route.navigateByUrl("admin");
    }
  };


}
