import { Router } from "express";
import {
  getParticipantById,
  getParticipants,
  signUp,
} from "../controllers/participant.controller";
import { ParticipantMiddleware } from "../middlewares/participant.middleware";

const participantRouter = Router();

participantRouter.get("/", getParticipants);

participantRouter.get("/:id", getParticipantById);

participantRouter.post("/signup",ParticipantMiddleware, signUp);

export default participantRouter;
