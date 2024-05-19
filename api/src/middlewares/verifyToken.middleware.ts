import { Payload } from './../interfaces/payload.interface';
import { JWT_SECRET } from "./../config/envs";
import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { SessionRequest } from "../interfaces/payload.interface";
import RoleModel from '../repositories/role.repository';

export const verifyToken = (
  req: SessionRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(400).json({ statusCode: 400, message: "Token sin ingresar" });
  }
  const tokenString = Array.isArray(token) ? token[0] : token;
  try {
    const decodedPayload = jwt.verify(tokenString, JWT_SECRET) as Payload;
    req.session = decodedPayload;
   next();
  } catch (err) {
    return res.status(400).json({ statusCode: 400, message: "Token inválido" });
  }
};