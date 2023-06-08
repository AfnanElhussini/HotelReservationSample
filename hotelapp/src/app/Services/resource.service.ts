import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Models/ResponseModel';
import { Room } from '../Models/Room';
import { apiUrl } from '../environments/environment';
import { Resource } from '../Models/Resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) { }

  GetAllMinified(): Observable<ResponseModel<Resource>> {
    return this.http.get<ResponseModel<Resource>>(apiUrl + "Resource")
  }

  //Fixed Backend
  GetResourcesByResouceType(ResourceTypeId: number): Observable<ResponseModel<Room>> {
    return this.http.get<ResponseModel<Room>>(apiUrl + "ResourceData/GetResouceData/" + ResourceTypeId)
  }

  //Fixed Backend
  GetResouceById(id: number): Observable<ResponseModel<Room>> {
    return this.http.get<ResponseModel<Room>>(apiUrl + "Resource/" + id)
  }

  //Fixed Backend
  GetRoomScheduleById(id: number): Observable<ResponseModel<Room>> {
    return this.http.get<ResponseModel<Room>>(apiUrl + "Schedule/" + id)
  }

}
