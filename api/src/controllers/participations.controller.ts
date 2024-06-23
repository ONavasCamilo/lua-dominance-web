import { Request, Response } from "express";
import { getParticipantsService, inscribeParticipationService } from "../services/participations.service";

export const inscribeParticipation = async (req: Request, res: Response) => {
  const { participantId, tournamentId } = req.body;
  try {
    const inscribe = await inscribeParticipationService(
      participantId,
      Number(tournamentId)
    );
    return res.status(201).json(inscribe);
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      res.status(400).send({ statusCode: 400, message: err.message });
    }
  }
};

export const getParticipants = async (req: Request, res: Response) => {
  try {
    const participants = await getParticipantsService();
    return res.status(202).json(participants)
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      res.status(400).send({ statusCode: 400, message: err.message });
    }
  }
};
