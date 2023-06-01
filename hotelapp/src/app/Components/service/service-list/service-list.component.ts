import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ResourceType } from 'src/app/Models/ResourceType';
import { ResponseModel } from 'src/app/Models/ResponseModel';
import { Service } from 'src/app/Models/Service';
import { ServiceService } from 'src/app/Services/service.service';
import { environment } from 'src/app/environments/environment';
@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent {
  services : Service[]=[];
  // response:ResponseModel =new ResponseModel(0, "", []) ;
  constructor(private serviceService: ServiceService){
    this.services = [
     new Service('Booking room','Lorem ipsum dolor sit amet, consectetur adipisicin…smod tempor incididunt ut labore et dolore magna.', 0 , 1)
    ]
  }
  ngOnInit(){
  //  this.serviceService.getAll().subscribe((res)=>
  //   {
  //     this.response= res;
  //     this.services= this.response.data; 
  //     console.log(this.services)
  //   })
  }
}
