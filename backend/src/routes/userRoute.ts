import express,{Router} from 'express'
import errorHandler from '../services/catchAsyncError'
import AuthController from '../controller/userController'
import authMiddleWare, { Role } from '../middleware/authMiddleWare'
import UserController from '../controller/userController'
const router:Router=express.Router()

router.route("/register")
.post(errorHandler(AuthController.registerUser))

router.route("/users")
.get(authMiddleWare.isAuthenticated,errorHandler(UserController.fetchUserDetails))

router.route("/login").post(errorHandler(AuthController.loginUser))




export default router