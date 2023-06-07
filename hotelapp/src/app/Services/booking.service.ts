import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Resource } from '../Models/Resource';
import { ResponseModel } from '../Models/ResponseModel';
import { apiUrl } from '../environments/environment';

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
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log("An error occured: ", error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Something bad happened, Please try again later'));
  }

  getAll(): Observable<ResponseModel> {
    return this.httpClient
      .get<ResponseModel>(`${apiUrl}/BookingItem`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  // getuserBookingItem(sourceId: number): Observable<Resource[]> {
  //   return this.httpClient
  //     .get<Resource[]>(`${apiUrl}/api/resource`)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }


}