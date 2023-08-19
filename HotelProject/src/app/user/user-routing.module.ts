import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserbookingComponent } from './userbooking/userbooking.component';


const routes: Routes = [

  {path : "" ,
  component : UserhomeComponent},

  {path : "userSignupForm" ,
  component : UsersignupComponent},

  {path : "userBooking" ,
component :UserbookingComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
