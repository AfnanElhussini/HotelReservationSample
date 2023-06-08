import { Component } from '@angular/core';
import { Room } from 'src/app/Models/Room';
import { ResourceService } from 'src/app/Services/resource.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {
  Rooms: Room[] = [];
  constructor(private RoomService: ResourceService) {

  }
  ngOnInit() {
    // this.Rooms = this.RoomService.getAllRooms();
    // console.log(this.Rooms);
  }
}
