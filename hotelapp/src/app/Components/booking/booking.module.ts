import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    BookingDetailsComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class BookingModule { }
