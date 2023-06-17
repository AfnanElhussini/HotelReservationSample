import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Schedule } from 'src/app/Models/schedule';
import { ScheduleService } from 'src/app/Services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  schedules:Schedule[]=[];
  fromDate?: Date;
  toDate?: Date;
  constructor(public scheduleService :ScheduleService,private toast:ToastrService){}
  searchSchedule(){
    this.scheduleService.getSchedules(this.fromDate,this.toDate).subscribe(e=>{
      if(!e.data.length)this.toast.error("Please choose another schedule","Sorry, No Schedules available");
      this.schedules=e.data
    })
  }
}
