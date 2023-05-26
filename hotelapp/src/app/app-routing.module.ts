import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { RoomDetailsComponent } from './Components/room-resource/room-details/room-details.component';
import { LoginComponent } from './account/login/login.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';



const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full", },
  { path: "rooms", loadChildren: () => import("./Components/room-resource/room-resource.module").then(m => m.RoomResourceModule) },  
 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },

  {path:"aboutUs" , component: AboutUsComponent},
  {path :"contactUs" , component : ContactUsComponent}
  //Login route
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
