import { ResourceType } from "./ResourceType";



export class Resource {
    constructor(public Id: number, public Name: string, public Price: number, public ResourceType: ResourceType) { }
}
