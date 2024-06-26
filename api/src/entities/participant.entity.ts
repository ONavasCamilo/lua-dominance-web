import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Role } from "./role.entity";
import { Participation } from "./participation.entity";

@Entity({ name: "participants" })
export class Participant extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

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
    select: false,
  })
  password: string;

  @Column({
    type: "int",
    default: 0,
  })
  numberOfParticipations: number;

  @ManyToOne(() => Role, (role) => role.participant, {
    cascade: true,
  })
  role: Role;

  @OneToMany(() => Participation, (participation) => participation.participant, {
    cascade: true,
  })
  participations: Participation[];
}
