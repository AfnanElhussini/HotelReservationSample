import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './account/login/login.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';
import { AuthgaurdsGuard } from './Gaurds/authgaurds.guard';

const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: "full", },
  // { path: "rooms", loadChildren: () => import("./Components/room-resource/room-resource.module").then(m => m.RoomResourceModule) },
  { path: "service", loadChildren: () => import("./Components/service/service.module").then(m => m.ServiceModule) },
  { path: "resource", loadChildren: () => import("./Components/resource/resource.module").then(m => m.ResourceModule) },
  { path: "booking", loadChildren: () => import("./Components/booking/booking.module").then(m => m.BookingModule) },
  // { path: "rooms", loadChildren: () => import("./Components/room-resource/room-resource.module").then(m => m.RoomResourceModule) , canActivate: [AuthgaurdsGuard]  },

  //Login route
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },

  //shared component
  { path: "aboutUs", component: AboutUsComponent },
  { path: "contactUs", component: ContactUsComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
