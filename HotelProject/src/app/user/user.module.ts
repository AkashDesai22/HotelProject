import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { ShareModule } from 'Common/share/share.module';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserbookingComponent } from './userbooking/userbooking.component';



@NgModule({
  declarations: [

  
    UserhomeComponent,
          UsersignupComponent,
          UserbookingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ShareModule,
  ]
})
export class UserModule { }
