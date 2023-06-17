import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/Models/schedule';
import { ScheduleService } from 'src/app/Services/schedule.service';

@Component({
  selector: 'app-available-schedules',
  templateUrl: './available-schedules.component.html',
  styleUrls: ['./available-schedules.component.css']
})
export class AvailableSchedulesComponent implements OnInit {
  fromDate?: Date;
  toDate?: Date;
  schedules:Schedule[]=[];
  constructor(public scheduleService :ScheduleService){}
  ngOnInit(){
  }

  getAvailableSchedules() {
    console.log(`from component ${this.fromDate}`)
    console.log(`from component ${this.toDate}`)
    this.scheduleService.getSchedules(this.fromDate,this.toDate)
    .subscribe(result => {
      console.log(result);
      console.log(result.data);
      this.schedules = result.data;
     // console.log(`sadasdas${this.schedules[0]}`)
      }, error => console.log(error));
    }
  }
