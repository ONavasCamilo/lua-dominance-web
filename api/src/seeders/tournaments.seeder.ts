import TournamentModel from "../repositories/tournament.repository";

export const seedTournaments = () => {
  const tournament = [{ name: "1ra edición" }];
  return tournament.map((t) => TournamentModel.insert(t));
};
