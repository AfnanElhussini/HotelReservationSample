import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { ResponseModel } from '../Models/ResponseModel';
import { apiUrl } from '../environments/environment';
import { BookingItem } from '../Models/BookingItem';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: ''
      })
    }
  }


  getAllBookingItems(): Observable<ResponseModel<BookingItem>> {
    return this.httpClient.get<ResponseModel<BookingItem>>( apiUrl +`BookingItem`);
  }

  // getBookingItemsByFilter(ResourceId : number , price :number ): Observable<ResponseModel<BookingItem>> {
  //   return this.httpClient.get<ResponseModel<BookingItem>>( apiUrl +`BookingItem?ResourceId=`+ResourceId + "&Price=" +price );
  // }

  // getBookingItemsByResourceId(ResourceId : number ): Observable<ResponseModel<BookingItem>> {
  //   return this.httpClient.get<ResponseModel<BookingItem>>( `${apiUrl}BookingItem?ResourceId=${ResourceId}` );
  // }
  getBookingItemsByBookId(BookId : number  ): Observable<ResponseModel<BookingItem>> {
    return this.httpClient.get<ResponseModel<BookingItem>>(`${apiUrl}BookingItem?BookId=${BookId}`);
  }
  // getBookingItemsPrice( price :number ): Observable<ResponseModel<BookingItem>> {
  //   return this.httpClient.get<ResponseModel<BookingItem>>( `${apiUrl}BookingItem?Price=${price}`);
  // }

  AddBookingItem(bookingItem :BookingItem): Observable<BookingItem>{
    return this.httpClient.post<BookingItem>(`${apiUrl}/BookingItem/AddOne`, JSON.stringify(bookingItem), this.httpOption );
  }
  UpdateBookingItem(bookingId : number , bookingItem :BookingItem): Observable<BookingItem>{
    return this.httpClient.patch<BookingItem>(`${apiUrl}/BookingItem?bookingId=${bookingId}`, JSON.stringify(bookingItem), this.httpOption );
  }
}