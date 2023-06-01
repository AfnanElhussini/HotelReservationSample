import { ServiceStatus } from "./ServiceStatus";

export class Service {
    constructor (
        public Name : string,
        public Description : string,
        public Status :ServiceStatus,
        public Id?: number){}
}

