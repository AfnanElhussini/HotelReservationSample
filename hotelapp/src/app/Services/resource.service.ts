import { Injectable } from '@angular/core';
import { ResourceType } from '../Models/ResourceType';
import { Resource } from '../Models/Resource';
import { ResourceAttribute } from '../Models/ServiceMetaData';
import { ResourceData } from '../Models/ResourceData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Models/ResponseModel';
import { Room } from '../Models/Room';
import { apiUrl } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

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
