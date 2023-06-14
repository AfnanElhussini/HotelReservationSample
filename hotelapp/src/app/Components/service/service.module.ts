import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceDetailsComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    ServiceRoutingModule,
    NgbModule
  ]
})
export class ServiceModule { }
