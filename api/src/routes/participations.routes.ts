import { Router } from "express";
import { inscribeParticipation } from "../controllers/participations.controller";

const participantionsRouter = Router();

participantionsRouter.post("/inscribe", inscribeParticipation);

export default participantionsRouter;
