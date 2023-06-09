import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResourceRoutingModule } from './resource-routing.module';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { RouterModule } from '@angular/router';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';



@NgModule({
  declarations: [
    ResourceListComponent,
    ResourceDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ResourceRoutingModule
  ],
  exports: [RouterModule]
})
export class ResourceModule { }
