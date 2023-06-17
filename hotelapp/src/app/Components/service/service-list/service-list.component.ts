import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Service } from 'src/app/Models/Service';
import { ServiceService } from 'src/app/Services/service.service';
import { ServiceDetailsComponent } from '../service-details/service-details.component';
import { StylingService } from 'src/app/Services/styling.service';
@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent {

  isBlurred: boolean = false;

  services: Service[] = [];

  constructor(private serviceService: ServiceService, private modal: NgbModal, private StylingService: StylingService) { }

  ngOnInit() {
    this.serviceService.getAll().subscribe((res) => {
      this.services = res.data;
    })
  }

  openModal(service: Service) {
    this.StylingService.BlurStatusChange(true);
    const modelRef = this.modal.open(ServiceDetailsComponent, { size: "xl",centered:true, backdrop: true });
    modelRef.componentInstance.service = service;
    modelRef.dismissed.subscribe(() => this.StylingService.BlurStatusChange(false));
  }
}
