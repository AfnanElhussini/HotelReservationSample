import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './Components/room-resource/room-list/room-list.component';
import { HomeComponent } from './shared/components/home/home.component';
import { RoomDetailsComponent } from './Components/room-resource/room-details/room-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full", },
  { path: "rooms", loadChildren: () => import("./Components/room-resource/room-resource.module").then(m => m.RoomResourceModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
