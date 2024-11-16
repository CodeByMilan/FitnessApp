import { Request, Response } from "express";
import { AuthRequest } from "../middleware/authMiddleWare";
import Workout from "../database/models/Workout";
import User from "../database/models/User";


interface Package extends Request{
  id: string,

}
class WorkoutController {
  public static async postWorkout(
    req: AuthRequest,
    res: Response
  ): Promise<void> {
    const userId = req.user?.id;
    const { workoutName,type,level,duration,description,packageId} =
      req.body;
    if (
      !workoutName||!type||!level||!duration||!description
    ) {
      res.status(400).json({
        message:
          "Please provide workoutName,type,level,duration,description",
      });
      return;
    }
    const data=await Workout.create({
     workoutName,
     type,
     level,
     duration,
     description,
     userId:userId,
     packageId
    });
    res.status(200).json({
      message: "workout created successfully",
      data
    });
  }
  public static async getAllWokout(
    req: Request,
    res: Response
  ): Promise<void> {
    const data = await Workout.findAll({
      include: [
        {
          model: User,
          attributes: ["id"],
        },
    
      ],
    });
    res.status(200).json({
      message: "workout fetched successfully",
      data,
    });
  }
  public static async getOneWorkout(
    req: Request,
    res: Response
  ): Promise<void> {
    const id = req.params.id;
    const data = await Workout.findOne({
      where: {
        id: id,
      },
    });
    if(!data){
      res.status(404).json({
        message: "workout not found",
      });
    }else{
    res.status(200).json({
      message: "workout fetched successfully",
      data,
    });
  }
}

  public static async deleteWoekout(
    req: AuthRequest,
    res: Response
  ): Promise<void> {
    const id = req.params.id;
    const data = await Workout.findAll({
      where: {
        id: id,
      },
    });
    if (data.length > 0) {
      await Workout.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({
        message: "workout deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "workout not found",
      });
    }
  }
  public static async updateWorkout(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user?.id;
    const { id } = req.params;
    console.log("workout id is :",id)
    //findAll returns array
    const data = await Workout.findAll({ 
        where: { 
            id 
        } 
    });
    if (data.length > 0) {
        const { workoutName,type,level,duration,description,packageId} = req.body;
        console.log("the content in body",req.body)

     const updateData= await Workout.update(
        {
        workoutName,
        type,
        level,
        duration,
        description,
        packageId,
        userId:userId,
        }, 
        { 
            where: 
            { id } 
        });
      res.status(200).json({
        message: "workout updated successfully",
        data:updateData
      });
    } else {
      res.status(404).json({
        message: "workout not found",
      });
    }
  }
  
public static async getWorkoutByPackageId(
  req: Package,
  res: Response
): Promise<void> {
  const { packageId } = req.params; 
  console.log("package id:",packageId)

  try {
    const data = await Workout.findAll({
      where: {
        packageId: packageId,  
      },
    });
    if (!data) {
      res.status(404).json({
        message: "Workout not found for the provided packageId",
      });
    } else {
      res.status(200).json({
        message: "Workout fetched successfully",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching the workout",
    });
  }
}
}
export default WorkoutController;
