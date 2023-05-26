import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookingComponent } from './booking/booking.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    BookingComponent,  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AccountModule { }
