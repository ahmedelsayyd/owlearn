import { Coureses } from "../enums/courses";

export interface Course{
  name:string,
  price: string,
  priceAfterDiscound:string,
  type: Coureses,
  description: string,
  src: string,
  date:string,
  registerd:number
}
