import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userSchema.js";
import { Job } from "../models/jobSchema.js";

export const getStats = catchAsyncErrors(async (req, res, next) => {
  const [totalUsers, totalJobSeekers, totalEmployers, totalJobs, totalActiveJobs] =
    await Promise.all([
      User.countDocuments(),
      User.countDocuments({ role: "Job Seeker" }),
      User.countDocuments({ role: "Employer" }),
      Job.countDocuments(),
      Job.countDocuments({ expired: false }),
    ]);

  const totalCompanies = totalEmployers;

  res.status(200).json({
    success: true,
    stats: {
      totalUsers,
      totalJobSeekers,
      totalEmployers,
      totalCompanies,
      totalJobs,
      totalActiveJobs,
    },
  });
});
