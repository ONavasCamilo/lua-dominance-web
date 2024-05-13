import { Router } from "express";
import {
  getParticipantById,
  getParticipants,
  signIn,
  signUp,
} from "../controllers/participant.controller";
import { signUpMiddleware } from "../middlewares/signUp.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";

const participantRouter = Router();

participantRouter.get("/", verifyToken, getParticipants);

participantRouter.get("/:id", getParticipantById);

participantRouter.post("/signup", signUpMiddleware, signUp);

participantRouter.post("/signin", signIn);

export default participantRouter;
