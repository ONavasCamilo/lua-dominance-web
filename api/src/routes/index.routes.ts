import { Router } from "express";
import participantRouter from "./participant.routes";

const router = Router();

router.use("/participants", participantRouter);

export default router;
