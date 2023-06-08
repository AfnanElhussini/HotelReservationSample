import { Component } from '@angular/core';
import { ResourceType } from 'src/app/Models/ResourceType';
import { ResourceTypeService } from 'src/app/Services/resource-type.service';

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
  
  logout() {
    localStorage.removeItem('userBookingAppToken');
  }

  resourceTypes: ResourceType[] = [];

  constructor(private resourceTypeService: ResourceTypeService) { }

  ngOnInit(): void {
    this.resourceTypeService.GetAll().subscribe(data =>
      this.resourceTypes = data.data
    )
  }



}
