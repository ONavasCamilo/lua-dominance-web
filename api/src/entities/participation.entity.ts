import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Participant } from "./participant.entity";
import { Tournament } from "./tournament.entity";

@Entity({ name: "participations" })
export class Participation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Participant, (participant) => participant.participations)
  participant: Participant;

  @ManyToOne(() => Tournament, (tournament) => tournament.participations)
  tournament: Tournament;

  @Column({
    type: "boolean",
    default: true,
  })
  isActive: boolean;
}
