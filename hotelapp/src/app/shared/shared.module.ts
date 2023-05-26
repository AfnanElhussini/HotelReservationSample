import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//  import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';

// import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    
     AboutUsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [ AboutUsComponent, HeaderComponent, FooterComponent ]
})
export class SharedModule  { 


}
