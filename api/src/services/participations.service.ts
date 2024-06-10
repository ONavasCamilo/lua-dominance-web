import { Participation } from "../entities/participation.entity";
import ParticipantModel from "../repositories/participant.repository";
import ParticipationModel from "../repositories/participation.repository";
import TournamentModel from "../repositories/tournament.repository";

export const inscribeParticipationService = async (
  participantId: string,
  tournamentId: number
) => {
  const participant = await ParticipantModel.findOneBy({ id: participantId });
  const tournament = await TournamentModel.findOneBy({ id: tournamentId });
  if (!participant) throw new Error("Id de participante inexistente");
  if (!tournament) throw new Error("Id de torneo inexistente");

  const participation = new Participation();
  participation.participant = participant;
  participation.tournament = tournament;
  const newParticipation = ParticipationModel.create(participation);
  await ParticipationModel.save(newParticipation);
  tournament.participants += 1;
  TournamentModel.save(tournament);
  return "Inscrito a torneo correctamente"
};
