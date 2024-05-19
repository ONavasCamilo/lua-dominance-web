import { verifyToken } from "../middlewares/verifyToken.middleware";
import { Router } from "express";
import {
  getParticipantById,
  getParticipants,
  signIn,
  signUp,
  updateDiscordParticipant,
} from "../controllers/participant.controller";
import { signUpMiddleware } from "../middlewares/signUp.middleware";
import { isAdmin } from "../middlewares/isAdmin.middleware";

const participantRouter = Router();

participantRouter.get("/", [verifyToken, isAdmin], getParticipants);

participantRouter.get("/:id", verifyToken, getParticipantById);

participantRouter.post("/signup", signUpMiddleware , signUp);

participantRouter.post("/signin", signIn);

participantRouter.put("/update/discord/:id", verifyToken, updateDiscordParticipant)

export default participantRouter;
