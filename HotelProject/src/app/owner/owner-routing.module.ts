import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { HotelregistrationComponent } from './hotelregistration/hotelregistration.component';

const routes: Routes = [

{path: "" ,
component : OwnerhomeComponent},

{path: "ownerSignUp",
component : OwnersignupComponent},

{path:"ownersuccess",
component:OwnersuccessComponent
},

{path :"HotelRegistration",
component:HotelregistrationComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
