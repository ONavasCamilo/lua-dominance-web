import { Payload } from './../interfaces/payload.interface';
import { JWT_SECRET } from "./../config/envs";
import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { SessionRequest } from "../interfaces/payload.interface";

export const verifyToken = (
  req: SessionRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1] ?? "";
  if (!token) {
    res.status(400).json({ statusCode: 400, message: "Token sin ingresar" });
  }
  try {
    const decodedPayload = jwt.verify(token, JWT_SECRET);
    req.session = decodedPayload as Payload;
    next();
  } catch (err) {
    res.status(400).json({ statusCode: 400, message: "Token inválido" });
  }
};
