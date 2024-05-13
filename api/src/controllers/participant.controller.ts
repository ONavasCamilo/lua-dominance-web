import { Request, Response } from "express";
import {
  getParticipantByIdService,
  getParticipantsService,
  signUpService,
} from "../services/participant.service";

export const getParticipants = async (req: Request, res: Response) => {
  try {
    const participants = await getParticipantsService();
    res.status(202).json(participants);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).send({ statusCode: 400, message: err.message });
    }
  }
};

export const getParticipantById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const participant = await getParticipantByIdService(id);
    res.status(202).json(participant);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).send({ statusCode: 400, message: err.message });
    }
  }
};

export const signUp = async (req: Request, res: Response) => {
  const { nick, discord, password, confirmpassword } = req.body;
  try {
    const user = await signUpService({
      nick,
      discord,
      password,
      confirmpassword,
    });
    res.status(202).json(user);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).send({ statusCode: 400, message: err.message });
    }
  }
};
