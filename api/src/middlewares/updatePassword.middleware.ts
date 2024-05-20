import { NextFunction, Request, Response } from "express";
import { updatePasswordDto } from "../dto/participant.dto";
import { ValidationError, validate } from "class-validator";

const updatePasswordMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password, confirmpassword } = req.body;

  const valid = new updatePasswordDto();
  valid.password = password;
  valid.confirmpassword = confirmpassword;

  validate(valid).then((err) => {
    if (err.length > 0) {
      return res.status(400).json({ error: err });
    } else {
      return next();
    }
  });
};

export default updatePasswordMiddleware;
