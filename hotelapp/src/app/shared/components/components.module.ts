import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    
    FooterComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
