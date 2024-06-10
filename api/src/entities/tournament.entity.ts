import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Participation } from "./participation.entity";

@Entity({ name: "tournaments" })
export class Tournament {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "varchar",
    length: 50,
    nullable: false,
  })
  name: string;

  @OneToMany(() => Participation, (participation) => participation.tournament, {
    cascade: true,
  })
  participations: Participation[];

  @Column({
    type: "int",
    default: 0,
  })
  participants: number;
}
