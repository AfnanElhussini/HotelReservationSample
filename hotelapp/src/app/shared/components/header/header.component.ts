import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})

export class HeaderComponent {
   mobileMenuShow = false;

   toggleNav() {
    this.mobileMenuShow = !this.mobileMenuShow;
    return this.mobileMenuShow;
   }

   checkIfLoggedIn() {
    return localStorage.getItem('userBookingAppToken');
  }
  




  
}
