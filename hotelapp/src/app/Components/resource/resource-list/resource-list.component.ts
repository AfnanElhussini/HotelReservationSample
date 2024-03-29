import { Component } from '@angular/core';
import { Resource } from 'src/app/Models/Resource';
import { ResourceService } from 'src/app/Services/resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent {

  Resources: Resource[] = [];

  slideConfig = {
    'arrows': false,
    'mobileFirst': true,
    'centerMode': true,
    'variableWidth': true,
    'adaptiveHeight': true,
    'focusOnSelect': true,
    'swipeToSlide': true,
  }

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceService.GetAllMinified().subscribe(result => this.Resources = result.data)
  }

}
