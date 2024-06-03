import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Role } from "./role.entity";

@Entity({ name: "participants" })
export class Participant extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string = uuid();

  @Column({
    type: "varchar",
    length: 17,
    nullable: false,
  })
  nick: string;

  @Column({
    type: "varchar",
    length: 32,
    nullable: true,
  })
  discord?: string;

  @Column({
    type: "varchar",
    length: 80,
    nullable: false,
  })
  password: string;

  @ManyToOne(() => Role, (role) => role.participant, {
    cascade: true,
  })
  role: Role;
}
