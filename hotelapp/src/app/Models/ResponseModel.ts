import { Service } from "./Service";

export class ResponseModel{
    constructor(
        public statusCode: number ,
        public message: string,
        public data: Service[] 
    ){}
}