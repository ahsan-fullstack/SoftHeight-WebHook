import { testService } from "../service/test.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const testController = asyncHandler(async (req, res) => {
  const data = req.body;

  const result = await testService.ValidateAndSaveData(data);
  res.status(200).json({
    success: true,
    ...result
  });
})