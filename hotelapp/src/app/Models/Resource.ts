import { ResourceType } from "./ResourceType";

export class Resource {
    constructor(
        public ResourceType: number |undefined,
        public Price: number, 
        public Id?: number)
        { }
}
