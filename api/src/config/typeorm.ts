import "reflect-metadata"
import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";
import { Participant } from "../entities/participant.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT as unknown as number,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: true,
    // dropSchema: true,
    entities: [Participant],
    subscribers: [],
    migrations: [],
})