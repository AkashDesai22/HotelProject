import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';

const routes: Routes = [
  
  {path : "" , 
  component: HomescreenComponent},

  {path : "home" , 
  component: HomescreenComponent},

  {path : "user" , 
  loadChildren:()=>import("./user/user.module").then((mod)=>mod.UserModule)},

  {path : "owner" ,
   loadChildren:()=>import("./owner/owner.module").then((mod)=>mod.OwnerModule)},

  {path : "admin", 
   loadChildren:()=>import("./admin/admin.module").then((mod)=>mod.AdminModule)},

   {path : "ownerSignUp",
  loadChildren:()=>import("./owner/owner.module").then((mod)=>mod.OwnerModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
