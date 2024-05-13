import { NextFunction, Request, Response } from "express";
import { signUpDto } from "../dto/participant.dto";
import { validate } from "class-validator";

export const ParticipantMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { nick, discord, password, confirmpassword } = req.body;
    
    const valid = new signUpDto();
    valid.nick = nick;
    valid.discord = discord;
    valid.password = password;
    valid.confirmpassword = confirmpassword;
    
    validate(valid).then((err) => {
        if (err.length > 0) {
            return res.status(400).json({ error: err })
        } else {
            next();
        }
    })
}
