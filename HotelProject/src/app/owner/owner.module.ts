import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { ShareModule } from 'Common/share/share.module';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { HotelregistrationComponent } from './hotelregistration/hotelregistration.component';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    OwnerhomeComponent,
    OwnersignupComponent,
    OwnersuccessComponent,
    HotelregistrationComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    ShareModule,
    
  
  ]
})
export class OwnerModule { }
