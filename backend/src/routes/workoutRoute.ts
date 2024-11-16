import express,{Router} from 'express'
import errorHandler from '../services/catchAsyncError'
import authMiddleWare, { Role } from '../middleware/authMiddleWare'
import WorkoutController from '../controller/workoutController'

const router:Router=express.Router()

router.route("/admin/workout")
.post(authMiddleWare.isAuthenticated,authMiddleWare.resetrictTo(Role.ADMIN),errorHandler(WorkoutController.postWorkout))
.get(authMiddleWare.isAuthenticated,authMiddleWare.resetrictTo(Role.ADMIN),errorHandler(WorkoutController.getAllWokout))

router.route("/admin/workout/:id")
.patch(authMiddleWare.isAuthenticated,authMiddleWare.resetrictTo(Role.ADMIN),errorHandler(WorkoutController.updateWorkout))
.delete(authMiddleWare.isAuthenticated,authMiddleWare.resetrictTo(Role.ADMIN),errorHandler(WorkoutController.deleteWoekout))
.get(authMiddleWare.isAuthenticated,authMiddleWare.resetrictTo(Role.ADMIN),errorHandler(WorkoutController.getOneWorkout))

router.route("/workoutpackage/:packageId")
.get(authMiddleWare.isAuthenticated,authMiddleWare.resetrictTo(Role.CUSTOMER),errorHandler(WorkoutController.getWorkoutByPackageId))


export default router