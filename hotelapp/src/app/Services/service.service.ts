import { Injectable } from '@angular/core';
import { Service } from '../Models/Service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/app/environments/environment'
import { ResponseModel } from '../Models/ResponseModel';
import { Resource } from '../Models/Resource';
  
  @Injectable({
    providedIn: 'root',
  })
  export class ServiceService {
  
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
        .get<ResponseModel>(`${environment.apiUrl}/api/Service`)
        .pipe(
          retry(2),
          catchError(this.handleError)
        );
    }
    getAllResources(sourceId :number):Observable<Resource[]>{
      return this.httpClient
        .get<Resource[]>(`${environment.apiUrl}/api/resource`)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
  

}
