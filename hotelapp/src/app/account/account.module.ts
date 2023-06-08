import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
<<<<<<< HEAD
=======
import { BookingComponent } from './booking/booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 06a76fd73600708523c85748971a721a6d5a8b0f

import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
<<<<<<< HEAD
    
=======
    BookingComponent,  


>>>>>>> 06a76fd73600708523c85748971a721a6d5a8b0f
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ]
})
export class AccountModule { }
