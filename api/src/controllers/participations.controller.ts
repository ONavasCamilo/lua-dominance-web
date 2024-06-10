import { Request, Response } from "express";
import { inscribeParticipationService } from "../services/participations.service";

export const inscribeParticipation = async (req: Request, res: Response) => {
  const { participantId, tournamentId } = req.body;
  try {
    const inscribe = await inscribeParticipationService(participantId, Number(tournamentId));
    return res.status(201).json(inscribe);
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      res.status(400).send({ statusCode: 400, message: err.message });
    }
  }
};
