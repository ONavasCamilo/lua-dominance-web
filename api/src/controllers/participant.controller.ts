import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import {
  getParticipantByIdService,
  getParticipantsService,
  signInService,
  signUpService,
  updateDiscordParticipantService,
} from "../services/participant.service";
import { JWT_SECRET } from "../config/envs";

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
    const participant = await signUpService({
      nick,
      discord,
      password,
      confirmpassword,
    });
    const token = jwt.sign(
      { id: participant.id, nick: participant.nick, role: participant.role },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.status(202).json({
      login: true,
      token,
      participant,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ statusCode: 400, message: err.message });
    }
  }
};

export const signIn = async (req: Request, res: Response) => {
  const { nick, password } = req.body;
  try {
    const participant = await signInService(nick, password);
    const token = jwt.sign(
      { id: participant.id, nick: participant.nick, role: participant.role },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(202).json({
      login: true,
      token,
      participant,
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ statusCode: 400, message: err.message });
    }
  }
};

export const updateDiscordParticipant = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { discord } = req.body;
  try {
    const updatedDiscord = await updateDiscordParticipantService(id, discord);
    return res.status(202).json({ updatedDiscord })
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ statusCode: 400, message: err.message });
    }
  }
};
