import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  journey!:any;
  useLoginData!:any;
  
  constructor(private toastr: ToastrService){ };

  warningToaster(msg:any,tile:any,configuration:any){
   this.toastr.warning(msg,tile,configuration);
  }
}
