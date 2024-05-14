import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Participant } from "./participant.entity";

@Entity("roles")
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();
  @Column({ unique: true })
  role: string;
  @OneToMany(() => Participant, (participant) => participant.role)
  participant: Participant[]
}
