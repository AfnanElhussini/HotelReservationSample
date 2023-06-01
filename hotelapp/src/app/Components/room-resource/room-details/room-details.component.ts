import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/Models/Room';
import { RoomService } from 'src/app/Services/room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent {

  room? : Room ;
  constructor(public RoomService : RoomService, public activatedRoute:ActivatedRoute){
    // this.activatedRoute.params.subscribe(param => {
    //   this.room = RoomService.getRoomById(param['id']);
    //     console.log(this.room);
    //   })
    // }
  }
}
