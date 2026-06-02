import { WebHookService } from "../service/webHook.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const webHookController = asyncHandler(async (req, res) => {
  const data = req.body;

  const result = await WebHookService.WebHookHandler(data);
  res.status(200).json({
    success: true,
    ...result
  });
})