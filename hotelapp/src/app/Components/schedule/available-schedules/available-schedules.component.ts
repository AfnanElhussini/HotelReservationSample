import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Schedule } from 'src/app/Models/schedule';
import { ScheduleService } from 'src/app/Services/schedule.service';
import { SchedulesPopupComponent } from '../schedules-popup/schedules-popup.component';

@Component({
  selector: 'app-available-schedules',
  templateUrl: './available-schedules.component.html',
  styleUrls: ['./available-schedules.component.css']
})
export class AvailableSchedulesComponent{
  fromDate?: Date;
  toDate?: Date;
  constructor(public scheduleService :ScheduleService, private modalService: NgbModal){}

  // getAvailableSchedules() {
  //   }

    openModal() {
      
    this.scheduleService.getSchedules(this.fromDate,this.toDate)
    .subscribe(result => {
     var popRef = this.modalService.open(SchedulesPopupComponent, {centered:true});
     popRef.componentInstance.schedules = result.data;
      }, error => console.log(error));
      
    }
  }
