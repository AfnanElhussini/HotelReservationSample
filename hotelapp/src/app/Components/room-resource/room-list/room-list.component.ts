import { Component } from '@angular/core';
import { Room } from 'src/app/Models/Room';
import { RoomService } from 'src/app/Services/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {
  Rooms : Room[]=[];
  constructor (private RoomService : RoomService){

  }
  ngOnInit(){
    // this.Rooms = this.RoomService.getAllRooms();
    // console.log(this.Rooms);
  }
}
