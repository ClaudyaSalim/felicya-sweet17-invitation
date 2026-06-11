import { ObjectId } from "mongodb";

export interface WishModel {
  _id: ObjectId;
  name: string;
  date: Date;
  message: string;
}