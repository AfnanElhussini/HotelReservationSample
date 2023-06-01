import { Component } from '@angular/core';
import { ResourceData } from 'src/app/Models/ResourceData';
import { ResourceService } from 'src/app/Services/resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent {
  data: ResourceData []=[];
  constructor(private resourceService : ResourceService){}

  ngOnInit(){
   this.data = this.resourceService.getAllResourceData();
    console.log(this.data);
  }
}
