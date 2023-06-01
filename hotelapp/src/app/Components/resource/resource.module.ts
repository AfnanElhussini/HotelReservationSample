import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResourceRoutingModule } from './resource-routing.module';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ResourceListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ResourceRoutingModule
  ],
  exports: [RouterModule]
})
export class ResourceModule { }
