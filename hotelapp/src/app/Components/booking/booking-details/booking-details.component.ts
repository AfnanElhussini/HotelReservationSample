import { Component } from '@angular/core';
import { BookingService } from 'src/app/Services/booking.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent {
  constructor( private bookingService : BookingService){

  }
  ngOnInit(){
   this.bookingService.getAll().subscribe(res => console.log(res)) 
  }
}
