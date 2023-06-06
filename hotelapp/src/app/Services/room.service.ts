import { Injectable } from '@angular/core';
import { apiUrl } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient) { }

  GetAllRooms() {
    return this.http.get(apiUrl + "")
  }
}
