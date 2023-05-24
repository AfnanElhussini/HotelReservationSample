import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//  import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

// import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    
     AboutUsComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [ AboutUsComponent, HeaderComponent ]
})
export class SharedModule  { 


}
