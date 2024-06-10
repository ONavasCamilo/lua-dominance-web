import { Router } from "express";
import participantRouter from "./participant.routes";
import participantionsRouter from "./participations.routes";

const router = Router();

router.use("/participants", participantRouter);
router.use("/participations", participantionsRouter)

export default router;
