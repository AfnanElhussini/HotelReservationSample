import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';   

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { InfoComponent } from './info/info.component';
import { EditComponent } from './edit/edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    ProfileComponent,
            SideNavComponent,
            InfoComponent,
            EditComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ProfileRoutingModule,
    RouterModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ]
})
export class ProfileModule { }
