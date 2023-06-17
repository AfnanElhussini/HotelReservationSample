import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../environments/environment';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Models/ResponseModel';
import { Schedule } from '../Models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  getSchedules(fromDate?: Date, toDate?: Date): Observable<ResponseModel<Schedule>> {
    console.log(fromDate);
    console.log(toDate);
    const url =`${apiUrl}Schedule/GetSchedules?fromDate=${fromDate}&toDate=${toDate}`;
    return this.http.get<ResponseModel<Schedule>>(url);
  }

}
