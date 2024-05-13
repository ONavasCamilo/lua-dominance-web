import { AppDataSource } from "../config/typeorm";
import { Participant } from "../entities/participant.entity";

const ParticipantModel = AppDataSource.getRepository(Participant).extend({
  async getParticipantByIdModel(id: string) {
    const participant = await ParticipantModel.findOneBy({ id });
    if (!participant) {
      throw new Error(`No existe participante con id: ${id}`);
    }
    const { password, ...withoutPassword } = participant;
    return withoutPassword;
  },

  async getParticipantByDiscordModel(discord: string) {
    const participant = await ParticipantModel.findOneBy({ discord });
    if (!participant) {
      throw new Error(`No existe participante con discord: ${discord}`);
    }
    const { password, ...withoutPassword } = participant;
    return withoutPassword;
  },

  async getParticipantByNickModel(nick: string) {
    const participant = await ParticipantModel.findOneBy({ nick });
    if (!participant) {
      throw new Error(`No existe participante con nick: ${nick}`);
    }
    const { password, ...withoutPassword } = participant;
    return withoutPassword;
  },
});

export default ParticipantModel;
