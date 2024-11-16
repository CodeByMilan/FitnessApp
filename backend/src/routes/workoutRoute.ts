import express,{Router} from 'express'
import errorHandler from '../services/catchAsyncError'
import authMiddleWare, { Role } from '../middleware/authMiddleWare'
import WorkoutController from '../controller/workoutController'

const router:Router=express.Router()

router.route("/admin/workout")
.post(errorHandler(WorkoutController.postWorkout))
.get(errorHandler(WorkoutController.getAllWokout))

router.route("/admin/workout/:id")
.patch(errorHandler(WorkoutController.updateWorkout))
.delete(errorHandler(WorkoutController.deleteWoekout))
.get(errorHandler(WorkoutController.getOneWorkout))

router.route("/workoutpackage/:packageId")
.get(errorHandler(WorkoutController.getWorkoutByPackageId))


export default router