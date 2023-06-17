import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/Models/Service';
import { ResourceService } from 'src/app/Services/resource.service';
import { ServiceService } from 'src/app/Services/service.service';
import { Resource } from 'src/app/Models/Resource';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ["./service-details.component.scss"]
})
export class ServiceDetailsComponent implements OnInit {
  service: Service | any;
  serviceResourceTypes: any;
  ServiceResources: Resource[] = []
  slideConfig: any;
  constructor(private serviceService: ServiceService, private resourceService: ResourceService,private activeModal:NgbActiveModal,private router:Router) {
    this.slideConfig = {
      "slidesToShow": 2,
      'arrows': false,
      'mobileFirst': true,
      'focusOnSelect': true,
      'centerMode': true,
      "adaptiveHeight":true,
      'vertical': true,
      'verticalSwiping': true
    }
  }
  ngOnInit() {
    this.serviceService.getMetadataById(this.service.id).subscribe(
      res => this.serviceResourceTypes = res.data.map(e => e.resourceTypeId)
    )
    this.resourceService.GetResourcesByResouceTypeId(2).subscribe(res => this.ServiceResources = res.data)
  }

  openSchedule(){
    this.activeModal.dismiss();
    this.router.navigateByUrl(`availableschedule/${this.service.name}`)
  }

}
