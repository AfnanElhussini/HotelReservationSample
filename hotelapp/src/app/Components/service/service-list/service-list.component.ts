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
  }
  ngOnInit(){
   this.serviceService.getAll().subscribe((res)=>
    {
      console.log(res.data[0]);
      this.services = res.data;
    })
  }
}
