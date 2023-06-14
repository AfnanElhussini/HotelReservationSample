import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Service } from 'src/app/Models/Service';
import { ServiceService } from 'src/app/Services/service.service';
import { ServiceDetailsComponent } from '../service-details/service-details.component';
@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent {
  services: Service[] = [];

  constructor(private serviceService: ServiceService, private modal: NgbModal) { }

  ngOnInit() {
    this.serviceService.getAll().subscribe((res) => {
      this.services = res.data;
    })
  }

  openModal(service: Service) {
    const modelRef = this.modal.open(ServiceDetailsComponent, { size: "xl", backdropClass: "bgModalBackground", backdrop: true });
    modelRef.componentInstance.service = service;
  }
}
