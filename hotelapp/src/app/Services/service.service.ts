import { Injectable } from '@angular/core';
import { Service } from '../Models/Service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/environments/environment'
import { ResponseModel } from '../Models/ResponseModel';

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

  getAll(): Observable<ResponseModel<Service[]>> {
    return this.httpClient.get<ResponseModel<Service[]>>(`${apiUrl}Service`)
  }
  getAllById(id : number): Observable<ResponseModel<Service>> {
    return this.httpClient.get<ResponseModel<Service>>(`${apiUrl}Service?Id=${id}`)
  }
  // getAllResources(sourceId: number): Observable<Resource[]> {
  //   return this.httpClient.get<Resource[]>(apiUrl + 'resource')
  // }

}
