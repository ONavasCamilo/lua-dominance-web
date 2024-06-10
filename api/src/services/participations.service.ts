import { Participation } from "../entities/participation.entity";
import ParticipantModel from "../repositories/participant.repository";
import ParticipationModel from "../repositories/participation.repository";
import TournamentModel from "../repositories/tournament.repository";

export const inscribeParticipationService = async (
  participantId: string,
  tournamentId: number
) => {
  const participant = await ParticipantModel.findOneBy({ id: participantId });
  if (!participant) throw new Error("Id de participante inexistente");
  const tournament = await TournamentModel.findOneBy({ id: tournamentId });
  if (!tournament) throw new Error("Id de torneo inexistente");
  const registered = await ParticipationModel.findOne({
    where: {
      participant: { id: participantId },
      tournament: { id: tournamentId },
    },
  });
  if (registered)
    throw new Error("El participante ya está inscrito en este torneo");
  const participation = new Participation();
  participation.participant = participant;
  participation.tournament = tournament;
  await ParticipationModel.save(participation);
  tournament.participants += 1;
  TournamentModel.save(tournament);
  return "Inscrito a torneo correctamente";
};
