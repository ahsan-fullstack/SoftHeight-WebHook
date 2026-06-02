import { Router } from "express";
import { testController } from "../controller/test.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { eventSchema } from "../validation/testValidation.schema.js";

const testRoute = Router();

testRoute.post('/',
    validate(eventSchema),
    authMiddleware,
    testController
)

export default testRoute;