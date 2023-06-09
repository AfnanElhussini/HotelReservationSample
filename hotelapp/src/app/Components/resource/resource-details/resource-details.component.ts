import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceData } from 'src/app/Models/ResourceData';
import { ResourceService } from 'src/app/Services/resource.service';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {

  resource: ResourceData | any;
  constructor(public resourceService: ResourceService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.resourceService.GetResourceDataById(this.activatedRoute.snapshot.params["id"]).subscribe(res =>
      this.resource = res.data
    )
  }

}
