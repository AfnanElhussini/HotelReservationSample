import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomResourceRoutingModule } from './room-resource-routing.module';
import { RoomListComponent } from './room-list/room-list.component';
import { RouterModule } from '@angular/router';
import { RoomDetailsComponent } from './room-details/room-details.component';


@NgModule({
  declarations: [
    RoomListComponent,
    RoomDetailsComponent,
  ],
  imports: [
    CommonModule,
    RoomResourceRoutingModule,
    RouterModule
  ],
  exports: [RoomListComponent, RoomDetailsComponent ]
})
export class RoomResourceModule { }