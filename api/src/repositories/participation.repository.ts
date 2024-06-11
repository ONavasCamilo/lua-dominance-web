import { AppDataSource } from "../config/typeorm";
import { Participation } from "../entities/participation.entity";

const ParticipationModel = AppDataSource.getRepository(Participation).extend({});

export default ParticipationModel;
