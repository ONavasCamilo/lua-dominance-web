import { Request } from 'express';
import { RoleEnum } from "./role.enum";
import { JwtPayload } from 'jsonwebtoken';


export interface SessionRequest extends Request {
    session?: Payload;
}
export interface Payload extends JwtPayload {
    id: string;
    nick: string;
    role: {
        id: string;
        role: string;
    }
}