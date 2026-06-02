import { AppError } from "../utils/AppError.js";

export const authMiddleware = (req, res, next) => {
  const { key } = req.headers;
  console.log('Received key:', req.headers); // Debugging log
  if (key !== process.env.SECRET_KEY) {
    throw new AppError('Unauthorized user', 401);
  }
  next();
}