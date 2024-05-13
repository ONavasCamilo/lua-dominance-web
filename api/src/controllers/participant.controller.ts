import { Request, Response } from "express";
import { getParticipantsService } from "../services/participant.service";

export const getParticipants = async (req: Request, res: Response) => {
    const participants = await getParticipantsService()
    res.status(202).json(participants)
}