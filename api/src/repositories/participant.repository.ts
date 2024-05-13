import { AppDataSource } from "../config/typeorm";
import { Participant } from "../entities/participant.entity";

export const ParticipantModel = AppDataSource.getRepository(Participant)