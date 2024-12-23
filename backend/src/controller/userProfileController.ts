import { Request, Response } from "express";
import UserProfile from "../database/models/UserProfile";
import { AuthRequest } from "../middleware/authMiddleWare";
import User from "../database/models/User";
import { getRecommendedPackage } from "../algorithm/kMeansHelper";
import Package from "../database/models/Package";
import PackageRecommendation from "../database/models/PackageRecommendation";
import { log } from "console";

class userProfileController {
  public static async createUserProfile(
    req: AuthRequest,
    res: Response
  ): Promise<void> {
    const userId = req.user?.id;
    console.log(userId)
    const { age, gender, fitness_level, activity_level, goal } = req.body;

    if (!age || !gender || !fitness_level || !activity_level || !goal) {
      res.status(400).json({
        message:
          "Please enter age, gender, fitness_level, activity_level, goal",
      });
      return;
    }

    // Convert user profile data to numeric values for clustering
    const genderValue = gender === "male" ? 1 : 2;
    const fitnessLevelValue =
      fitness_level === "beginner"
        ? 1
        : fitness_level === "intermediate"
        ? 2
        : 3;
    const activityLevelValue =
      activity_level === "low" ? 1 : activity_level === "moderate" ? 2 : 3;
    const goalValue =
      goal === "weight_loss"
        ? 1
        : goal === "strength"
        ? 2
        : goal === "endurance"
        ? 3
        : 4;

          const existingProfile = await UserProfile.findOne({ where: { userId } });
          if (existingProfile) {
            console.log("Existing Profile Found:", existingProfile.toJSON());
            res.status(400).json({
              message: "User already has a profile",
            });
            return;
          }
    await UserProfile.create({
      age,
      gender,
      fitness_level,
      activity_level,
      goal,
      userId,
    });

    const userProfileVector = [
      fitnessLevelValue,
      activityLevelValue,
      goalValue,
      genderValue,
    ];

    const recommendedPackage = getRecommendedPackage(userProfileVector);

    const packages = await Package.findAll();
    const packageNameToIdMap: { [key: string]: string } = {};

    packages.forEach((pkg) => {
      const packageName = pkg.dataValues.packageName;
      const packageId = pkg.dataValues.id;
      if (packageName && packageId) {
        packageNameToIdMap[packageName.toLowerCase()] = packageId;
      }
    });

    const recommendedPackageNormalized = recommendedPackage.toLowerCase();
    const recommendedPackageId =
      packageNameToIdMap[recommendedPackageNormalized];

    if (!recommendedPackageId) {
      res.status(500).json({
        message: "Could not find the recommended package ID",
      });
      return;
    }

    await PackageRecommendation.create({
      userId,
      packageId: recommendedPackageId,
    });

    const userProfileWithUser = await UserProfile.findOne({
      where: { userId },
      include: [
        {
          model: User,
          attributes: ["id", "email"], 
        },
      ],
    });
    res.status(200).json({
      message: "UserProfile created successfully",
      data:{
     ...userProfileWithUser?.toJSON(),
      recommendedPackage,
      }
      
    });
  }

  public static async getAllUserProfile(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const data = await UserProfile.findAll({
        include: [
          {
            model: User,
            attributes: ["id", "email"],
          },
        ],
      });
  
      res.status(200).json({
        message: "user fetched successfully",
        data,
      });
    } catch (error) {
      console.error("Error fetching user profiles:", error);
      res.status(500).json({ message: "Error fetching user profiles", error });
    }
  }

  public static async getOneUser(
    req: AuthRequest,
    res: Response
  ): Promise<void> {
    const userId = req.params.id;
    console.log(userId)
    const user= await UserProfile.findOne({
      where: {
        userId,
      },
      include: [
        {
          model: User,
          attributes: ["id", "email", "username"],
        },
        
      ],
    });
    const packageRecommended =await PackageRecommendation.findOne({
      where: {
        userId,
        },
        attributes: [],
        include:{
          model: Package,
          attributes: ["id", "packageName", "price", "description"],
        }
    })
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(200).json({
        message: "User fetched successfully",
          ...user.toJSON(),
          ...packageRecommended?.toJSON()
        
      });
    }
  }
}

export default userProfileController;
