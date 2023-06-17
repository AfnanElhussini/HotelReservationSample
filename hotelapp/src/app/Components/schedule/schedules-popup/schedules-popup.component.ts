import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Schedule } from 'src/app/Models/schedule';

@Component({
  selector: 'app-schedules-popup',
  templateUrl: './schedules-popup.component.html',
  styleUrls: ['./schedules-popup.component.css']
})
export class SchedulesPopupComponent {
  schedules:Schedule[]=[];
  constructor(public activeModal:NgbActiveModal){}
  closeModal()
  {
    this.activeModal.dismiss();
  }
}
