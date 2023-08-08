import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  journey!:any;
  useLoginData!:any;
  id:any;
  HotelDataById: any;
  
  constructor(private toastr: ToastrService,){ };

  warningToaster(msg:any,tile:any,configuration:any){
   this.toastr.warning(msg,tile,configuration);
  };

  sucessToaster(msg:any,tile:any,configuration:any){
    this.toastr.success(msg,tile,configuration);
   };



}
