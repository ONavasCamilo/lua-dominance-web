import { Router } from "express";
import {
  getParticipantById,
  getParticipants,
  signIn,
  signUp,
} from "../controllers/participant.controller";
import { signUpMiddleware } from "../middlewares/signUp.middleware";

const participantRouter = Router();

participantRouter.get("/", getParticipants);

participantRouter.get("/:id", getParticipantById);

participantRouter.post("/signup", signUpMiddleware, signUp);

participantRouter.post("/signin", signIn)

export default participantRouter;
