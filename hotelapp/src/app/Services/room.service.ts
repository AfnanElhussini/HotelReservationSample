import { Injectable } from '@angular/core';
import { Resource } from 'src/app/Models/Resource';
import { ResourceType } from 'src/app/Models/ResourceType';
import { Room } from 'src/app/Models/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  // resType: ResourceType[] =[]  ;
  // Resouces : Resource[] =[];
  // Rooms : Room[] =[];
  // constructor() {
  //   this.resType = [
  //     new ResourceType(1, "Room"),
  //     new ResourceType(2, "Bed"),
  //     new ResourceType(3, "Tvs"),
  //   ]
  //   this.Resouces =[
  //     new Resource(1, "Premium King Room",100 , this.resType[0] ),
  //     new Resource(2, "Deluxe Room ",200 , this.resType[0] ),
  //     new Resource(3, "Double Room",300 , this.resType[0] ),
  //     new Resource(4, "King Bed",100 , this.resType[1] ),
  //   ];

  //   this.Rooms =[
  //     new Room(1,this.Resouces[0] , 120 , 2,this.Resouces[3],["tvs", "WIFI"], "The two commonly known recreational vehicle classes are the motorized and towable. Towable rvs are the travel trailers and the fifth wheel. The rv travel trailer or fifth wheel has the attraction of getting towed by a pickup or a car, thus giving the adaptability of possessing transportation for you when you are parked at your campsite.", 4, "room-1.jpg"),
  //     new Room(2,this.Resouces[0] , 120 , 2,this.Resouces[3],["tvs", "WIFI"], "The two commonly known recreational vehicle classes are the motorized and towable. Towable rvs are the travel trailers and the fifth wheel. The rv travel trailer or fifth wheel has the attraction of getting towed by a pickup or a car, thus giving the adaptability of possessing transportation for you when you are parked at your campsite.", 4, "room-2.jpg"),
  //     new Room(3,this.Resouces[0] , 120 , 2,this.Resouces[3],["tvs", "WIFI"], "The two commonly known recreational vehicle classes are the motorized and towable. Towable rvs are the travel trailers and the fifth wheel. The rv travel trailer or fifth wheel has the attraction of getting towed by a pickup or a car, thus giving the adaptability of possessing transportation for you when you are parked at your campsite.", 4, "room-3.jpg"),
  //     new Room(4,this.Resouces[0] , 120 , 2,this.Resouces[3],["tvs", "WIFI"], "The two commonly known recreational vehicle classes are the motorized and towable. Towable rvs are the travel trailers and the fifth wheel. The rv travel trailer or fifth wheel has the attraction of getting towed by a pickup or a car, thus giving the adaptability of possessing transportation for you when you are parked at your campsite.", 4, "room-4.jpg"),
  //     new Room(5,this.Resouces[0] , 120 , 2,this.Resouces[3],["tvs", "Television"], "The two commonly known recreational vehicle classes are the motorized and towable. Towable rvs are the travel trailers and the fifth wheel. The rv travel trailer or fifth wheel has the attraction of getting towed by a pickup or a car, thus giving the adaptability of possessing transportation for you when you are parked at your campsite.", 4, "room-5.jpg"),
  //     new Room(6,this.Resouces[0] , 120 , 2,this.Resouces[3],["tvs", "Television"], "The two commonly known recreational vehicle classes are the motorized and towable. Towable rvs are the travel trailers and the fifth wheel. The rv travel trailer or fifth wheel has the attraction of getting towed by a pickup or a car, thus giving the adaptability of possessing transportation for you when you are parked at your campsite.", 4, "room-6.jpg"),
  //     new Room(7,this.Resouces[0] , 120 , 2,this.Resouces[3],["tvs", "Television"], "The two commonly known recreational vehicle classes are the motorized and towable. Towable rvs are the travel trailers and the fifth wheel. The rv travel trailer or fifth wheel has the attraction of getting towed by a pickup or a car, thus giving the adaptability of possessing transportation for you when you are parked at your campsite.", 4, "room-b1.jpg"),
  //   ]
  //  }

  //  getAllRooms() : Room[]{
  //   return this.Rooms;
  //  }

  //  getRoomById(Id : number): Room | undefined{
  //   return this.Rooms.find(x => x.RoomId == Id);
  //  }
}
