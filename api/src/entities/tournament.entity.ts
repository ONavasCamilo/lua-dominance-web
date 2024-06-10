import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Participation } from "./participation.entity";

@Entity({ name: "tournaments" })
export class Tournament {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    type: "varchar",
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    type: "int",
    default: 0,
  })
  participants: number;

  @Column({
    type: "boolean",
    default: true,
  })
  inProgress: boolean;
  
  @OneToMany(() => Participation, (participation) => participation.tournament, {
    cascade: true,
  })
  participations: Participation[];
}
