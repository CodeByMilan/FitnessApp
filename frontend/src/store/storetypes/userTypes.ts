import { Package } from "./packageTypes";
import { authStatus, User } from "./storeTypes";

export interface UserProfile {
  Package: Package;
    id:string,
   age:string,
   gender: string,
  fitness_level: string,
  activity_level: string,
  goal: string,
  userId:string
  User:User,
  createdAt:string,
  updatedAt:string,
}
export interface UserProfileState{
    userProfile:UserProfile [],
    status:authStatus ,
    singleUser:UserProfile|null,
    errorMessage:string
}