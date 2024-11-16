import { authStatus } from "./storeTypes"

export interface Package{
    id:string,
    packageName:string,
    description:string,
    price:string
}
export interface PackageState{
    packages:Package[],
    status:authStatus
}

export interface Workout{
    id:string,
    workoutName:string,
    type:string,
    level:string,
    duration:number,
    description:string,
    userId:string,
    packageId:string
}
export interface WorkoutState{
    workouts:Workout[],
    status:authStatus
}