import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms"
 
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  bookingForm = new FormGroup({
    checkIn: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')
    ]),
    checkOut :new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')
    ]),
    guests: new FormControl ('' , [
      Validators.required]),
    rooms: new FormControl('' , [
      Validators.required])

  });

  SubmitForm(){
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value);
    }
  }
}

