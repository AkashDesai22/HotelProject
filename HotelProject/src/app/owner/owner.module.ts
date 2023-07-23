import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { ShareModule } from 'Common/share/share.module';


@NgModule({
  declarations: [
    OwnerhomeComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    ShareModule,
  ]
})
export class OwnerModule { }
