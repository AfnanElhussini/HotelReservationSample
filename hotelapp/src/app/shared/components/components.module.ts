import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    
    FooterComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
