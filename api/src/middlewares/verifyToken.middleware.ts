import { JWT_SECRET } from "./../config/envs";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1] ?? "";
  if (!token) {
    res.status(400).json({ statusCode: 400, message: "Token sin ingresar" });
  }
  try {
      const decodedParticipant = jwt.verify(token, JWT_SECRET);
      next();
  } catch (err) {
      res.status(400).json({ statusCode: 400, message: "Token inválido" });
  }
  
};
