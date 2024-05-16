import { NextFunction, Request, Response } from "express";
import { SessionRequest } from "../interfaces/payload.interface";
import RoleModel from "../repositories/role.repository";

export const isAdmin = async (
  req: SessionRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.session) {
    res.status(400).json({ statusCode: 400, message: "Sesión sin encontrar" });
  }
  try {
    const adminRol = await RoleModel.findOneBy({ role: "admin" });
    if (!adminRol) {
        res.status(400).json({ statusCode: 400, message: "Error server" });
    }
    if (adminRol?.id === req.session?.role.id) return next();
    res.status(400).json({ statusCode: 400, message: "Unauthorized" });
  } catch (err) {
    res.status(400).json({ statusCode: 400, message: `${err} error` });
  }
};
