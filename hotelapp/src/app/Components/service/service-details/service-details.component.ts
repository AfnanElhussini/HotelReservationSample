import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/Models/Service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  service: Service | any;
  constructor() { }
  ngOnInit() { }

}
