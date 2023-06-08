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
  // bookingItemsVM: BookingItemVM []=[];
  // displayedColumns: string[] = ['No', 'resourceName', 'Price', 'operations'];
  // dataSource = new MatTableDataSource(this.bookingItems);

  constructor( private bookingService : BookingService){}
  ngOnInit(){
   this.bookingService.getAllBookingItems().subscribe(res => 
    {
      console.log(res.data)
      if(res.data.length != null){
        this.bookingItems = res.data;
        res.data.forEach(element => {
          // booking :BookingItemVM  = new BookingItemVM(element.resourceId.toString() , element.price,element.bookingId );
        });
      }else{
        alert("there is no connetctions");
      }
    })
  }
  DeleteBookingItem(resourceId : number){
    
  }

}
