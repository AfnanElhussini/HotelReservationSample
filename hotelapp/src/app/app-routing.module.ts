import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';
import { ResetPasswordComponent } from './account/reset-password/reset-password.component';
import { ConfirmEmailComponent } from './account/confirm-email/confirm-email.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';
import { PaymentComponent } from './Components/booking/payment/payment.component';
import { PaymentPaypalComponent } from './account/payment-paypal/payment-paypal.component';
import { ServiceListComponent } from './Components/service/service-list/service-list.component';
import { ScheduleComponent } from './Components/schedule/schedule.component';

const routes: Routes = [

  { path: '', component:ServiceListComponent,pathMatch:"full" },
  { path: "service", loadChildren: () => import("./Components/service/service.module").then(m => m.ServiceModule) },
  { path: "resource", loadChildren: () => import("./Components/resource/resource.module").then(m => m.ResourceModule) },
  { path: "booking", loadChildren: () => import("./Components/booking/booking.module").then(m => m.BookingModule) },
  { path: "availableschedule/:servicename", component:ScheduleComponent},

  //Login route
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },

  { path: 'ConfirmEmail', component: ConfirmEmailComponent, data: { queryParams: ['userId', 'token'] } },
  //shared component
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },

  { path: 'payment', component: PaymentComponent },
  { path: 'paymentPaypal', component: PaymentPaypalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
