import {Model} from "mongoose";
import {IUserModel} from "./user";

export interface IModel{
    user:Model<IUserModel>; //That means that the user property is Model of type IUserModel. 
}