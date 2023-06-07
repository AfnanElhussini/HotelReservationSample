import { Injectable } from '@angular/core';
import { apiUrl } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../Models/ResponseModel';
import { Room } from '../Models/Room';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient) { }

  GetResourcesByResouceType(ResourceTypeId: number): Observable<ResponseModel<Room>> {
    return this.http.get<ResponseModel<Room>>(apiUrl + "ResourceData/GetResouceData/" + ResourceTypeId)
  }
  GetResouceById(id: number): Observable<ResponseModel<Room>> {
    return this.http.get<ResponseModel<Room>>(apiUrl + "Resource/" + id)
  }
  GetRoomScheduleByResouceId(id: number): Observable<ResponseModel<Room>> {
    return this.http.get<ResponseModel<Room>>(apiUrl + "Schedule/" + id)
  }
}
