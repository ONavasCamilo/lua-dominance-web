import { NextFunction, Request, Response } from "express";
import { signUpDto } from "../dto/participant.dto";
import { ValidationError, validate } from "class-validator";

const signUpMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { nick, discord, password, confirmpassword } = req.body;

  const valid = new signUpDto();
  valid.nick = nick;
  valid.discord = discord;
  valid.password = password;
  valid.confirmpassword = confirmpassword;

  validate(valid).then((err) => {
    if (valid.password !== valid.confirmpassword) {
      const newError: ValidationError = {
        target: {
          nick,
          discord,
          password,
          confirmpassword,
        },
        value: password,
        property: "password",
        constraints: {
          matchPassword: "La contraseña y la confirmación no coinciden",
        },
      };
      err.push(newError);
    }
    if (err.length > 0) {
      return res.status(400).json({ error: err });
    } else {
      return next();
    }
  });
};

export default signUpMiddleware;
