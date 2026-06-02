import { Router } from "express";
import { webHookController } from "../controller/webHook.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const webHookRoute = Router();

webHookRoute.post('/',
    authMiddleware,
    webHookController
)

export default webHookRoute;