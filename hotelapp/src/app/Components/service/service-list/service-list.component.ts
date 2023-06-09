import { Component } from '@angular/core';
import { Service } from 'src/app/Models/Service';
import { ServiceService } from 'src/app/Services/service.service';
@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent {
  services: Service[] = [];

  constructor(private serviceService: ServiceService) {
  }
  ngOnInit() {
    this.serviceService.getAll().subscribe((res) =>
      this.services = res.data
    )
  }
}
