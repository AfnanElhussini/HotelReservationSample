import { BookingItem } from 'src/app/Models/BookingItem';
import { BookingService } from 'src/app/Services/booking.service';
import { Component} from '@angular/core';
import { BookingItemVM } from 'src/app/ViewModels/BookingItemVM';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent {
  bookingItems : BookingItem[]=[];
  constructor( private bookingService : BookingService){}
  ngOnInit(){
   this.bookingService.getAllBookingItems().subscribe(res => 
    {
      console.log(res.data)
      if(res.data.length != null){
        // came from session storage
        this.bookingItems = res.data;

      }else{
        alert("there is no connetctions");
      }
    })
  }
  DeleteBookingItem(resourceId : number){
    
  }

}
