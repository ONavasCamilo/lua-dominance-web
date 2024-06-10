import { verifyToken } from "../middlewares/verifyToken.middleware";
import { Router } from "express";
import {
  getParticipantById,
  getParticipants,
  signIn,
  signUp,
  updateDiscordParticipant,
  updatePasswordParticipant,
} from "../controllers/participant.controller";
import signUpMiddleware from "../middlewares/signUp.middleware";
import updatePasswordMiddleware from "../middlewares/updatePassword.middleware";

const participantRouter = Router();

participantRouter.get("/", getParticipants);

participantRouter.get("/:id", verifyToken, getParticipantById);

participantRouter.post("/signup", signUpMiddleware, signUp);

participantRouter.post("/signin", signIn);

participantRouter.put(
  "/update/discord/:id",
  verifyToken,
  updateDiscordParticipant
);

participantRouter.put(
  "/update/password/:id",
  [verifyToken, updatePasswordMiddleware],
  updatePasswordParticipant
);

export default participantRouter;
