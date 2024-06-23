import { Router } from "express";
import usersRouter from "./users.routes";
import participantionsRouter from "./participations.routes";

const router = Router();

router.use("/users", usersRouter);
router.use("/participations", participantionsRouter)

export default router;
