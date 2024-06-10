import "reflect-metadata";
import { DataSource } from "typeorm";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  RESTART_SCHEMA,
} from "./envs";
import { Participant } from "../entities/participant.entity";
import { Role } from "../entities/role.entity";
import { Participation } from "../entities/participation.entity";
import { Tournament } from "../entities/tournament.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT as unknown as number,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Participant, Role, Participation, Tournament],
  subscribers: [],
  migrations: [],
  dropSchema: RESTART_SCHEMA,
});
