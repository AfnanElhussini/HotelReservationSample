import { Component } from '@angular/core';
import { Service } from 'src/app/Models/Service';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services: Service[] = [];

  constructor(private serviceService: ServiceService) {
  }
  ngOnInit() {
    this.serviceService.getAll().subscribe((res) => {
      this.services = res.data;
    })
  }

}
