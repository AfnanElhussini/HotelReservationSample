import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { RoomDetailsComponent } from './Components/room-resource/room-details/room-details.component';
import { LoginComponent } from './account/login/login.component';
import { RegistrationComponent } from './account/registration/registration.component';



const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full", },
  { path: "rooms", loadChildren: () => import("./Components/room-resource/room-resource.module").then(m => m.RoomResourceModule) },
  // { path: 'details/:id', component: RoomDetailsComponent },
  
 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },


  //Login route
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
