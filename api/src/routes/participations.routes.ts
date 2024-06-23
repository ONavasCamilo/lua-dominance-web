import { Router } from "express";
import { getParticipants, inscribeParticipation } from "../controllers/participations.controller";

const participantionsRouter = Router();

participantionsRouter.get("/participants", getParticipants)

participantionsRouter.post("/inscribe", inscribeParticipation);

export default participantionsRouter;
