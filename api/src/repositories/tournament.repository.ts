import { AppDataSource } from "../config/typeorm";
import { Tournament } from "../entities/tournament.entity";

const TournamentModel = AppDataSource.getRepository(Tournament).extend({

})

export default TournamentModel;