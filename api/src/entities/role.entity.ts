import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Participant } from "./participant.entity";

@Entity("roles")
export class Role extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  role: string;
  
  @OneToMany(() => Participant, (participant) => participant.role)
  participant: Participant[]
}
