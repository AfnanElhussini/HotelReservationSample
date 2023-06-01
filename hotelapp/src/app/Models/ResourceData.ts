import { Resource } from "./Resource";
import { ResourceAttribute } from "./ServiceMetaData";

export class ResourceData{
    constructor(
        public resourceId : Resource,
        public attributeId : ResourceAttribute,
        public attributeValue : any
    ){}
    
}