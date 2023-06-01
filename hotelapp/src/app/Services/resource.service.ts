import { Injectable } from '@angular/core';
import { ResourceType } from '../Models/ResourceType';
import { Resource } from '../Models/Resource';
import { ResourceAttribute} from '../Models/ServiceMetaData';
import { ResourceData } from '../Models/ResourceData';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  resourceType : ResourceType []=[
    new ResourceType( "Room" , 1),
    new ResourceType( "Electronics",2),
    new ResourceType( "Furnatures",3)
  ];
  resource : Resource []=[
    new Resource(this.resourceType[0].Id, 100, 1),
    //room (name1 , size 2 , imageurl 3, capacity 4, rate 5)
    // new Resource(this.resourceType[0].Id, 200, 2),// sweat
    new Resource(this.resourceType[1].Id, 300, 2),
    //tv (barnd 5 , name  6)
    // new Resource(this.resourceType[1].Id, 400, 4),// palystation
    new Resource(this.resourceType[2].Id, 500, 3),
    //bed (type 7, brand 8)
  ];

  resourceAttributes : ResourceAttribute[]=[
    new ResourceAttribute(1, this.resourceType[0],"Name","int"),
    new ResourceAttribute(2, this.resourceType[0],"Size","int"),
    new ResourceAttribute(3, this.resourceType[0],"ImageURL","string"),
    new ResourceAttribute(4, this.resourceType[0],"Capacity","int"),
    new ResourceAttribute(5, this.resourceType[0],"Rating","int"),
    new ResourceAttribute(6, this.resourceType[1],"Brand","string"),
    new ResourceAttribute(7, this.resourceType[1],"Name","string"),
    new ResourceAttribute(8, this.resourceType[2],"Type","string"),
    new ResourceAttribute(9, this.resourceType[2],"Brand","string"),
  ];
  resourceData : ResourceData[]=[
    new ResourceData(this.resource[0] , this.resourceAttributes[0] ,"room 1"),
    new ResourceData(this.resource[0] , this.resourceAttributes[1] ,120),
    new ResourceData(this.resource[0] , this.resourceAttributes[2] ,2),
    new ResourceData(this.resource[0] , this.resourceAttributes[3] ,4),
    new ResourceData(this.resource[0] , this.resourceAttributes[0] ,"room 2"),
    new ResourceData(this.resource[0] , this.resourceAttributes[1] ,120),
    new ResourceData(this.resource[0] , this.resourceAttributes[2] ,2),
    new ResourceData(this.resource[0] , this.resourceAttributes[3] ,4),
    new ResourceData(this.resource[0] , this.resourceAttributes[0] ,"room 3"),
    new ResourceData(this.resource[0] , this.resourceAttributes[1] ,120),
    new ResourceData(this.resource[0] , this.resourceAttributes[2] ,2),
    new ResourceData(this.resource[0] , this.resourceAttributes[3] ,4),
    new ResourceData(this.resource[1] , this.resourceAttributes[4]  , "barnd x "),
    new ResourceData(this.resource[1] , this.resourceAttributes[5] , "Tv 1"),
    new ResourceData(this.resource[1] , this.resourceAttributes[4] , "brand y"),
    new ResourceData(this.resource[1] , this.resourceAttributes[5] , "Tv 2"),
    new ResourceData(this.resource[3] , this.resourceAttributes[6] , "bed 1"),
    new ResourceData(this.resource[3] , this.resourceAttributes[7] , "btrand 1"),
  ]


  constructor() { 

  }
  getAllResourceData() :ResourceData[] {
    return this.resourceData;
  }
}
