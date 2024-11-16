import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import {API, APIAuthenticated} from "../http";
import { Package, PackageState, Workout, WorkoutState } from "./storetypes/packageTypes";
import { authStatus } from "./storetypes/storeTypes";

const initialState: WorkoutState = {
 workouts:[],
 status: authStatus.loading,
};
const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    setWorkout(state: WorkoutState, action: PayloadAction<Workout[]>) {
      state.workouts = action.payload;
    },
    setStatus(state: WorkoutState, action: PayloadAction<authStatus>) {
      state.status = action.payload;
    },
  },
});
export const { setWorkout, setStatus, } = workoutSlice.actions;
export default workoutSlice.reducer;

export function fetchWorkoutByPackageId(packageId:string) {
  return async function fetchWorkoutByPackageIdThunk(dispatch: AppDispatch) {
    dispatch(setStatus(authStatus.loading));
    try {
      const response = await APIAuthenticated.get(`workoutpackage/${packageId}`);
      if (response.status == 200) {
        const { data } = response.data;
        console.log(data)
        dispatch(setStatus(authStatus.success));
        dispatch(setWorkout(data));
      } else {
        dispatch(setStatus(authStatus.error));
      }
    } catch (error) {
      dispatch(setStatus(authStatus.error));
    }
  };
}



