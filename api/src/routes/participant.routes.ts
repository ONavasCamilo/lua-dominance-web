import { Router } from 'express';
import { getParticipants } from '../controllers/participant.controller';

const participantRouter = Router()

participantRouter.get('/', getParticipants)

export default participantRouter;