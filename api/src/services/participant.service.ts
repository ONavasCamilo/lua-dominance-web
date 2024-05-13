import { signUpDto } from "../dto/participant.dto";
import ParticipantModel from "../repositories/participant.repository";

export const getParticipantsService = async () => {
  const participants = await ParticipantModel.find();
  return participants.map(
    ({ password, ...withoutPassowrd }) => withoutPassowrd
  );
};

export const getParticipantByIdService = async (id: string) => {
  const participant = await ParticipantModel.getParticipantByIdModel(id);
  return participant;
};

export const signUpService = async (participant: signUpDto) => {
  const { nick, discord } = participant;
  const existNick = await ParticipantModel.findOneBy({ nick });
  if (existNick) throw new Error("Nick existente, ingresa otro");
  if (participant.discord) {
      const existDiscord = await ParticipantModel.findOneBy({ discord });
      if (existDiscord) throw new Error("Discord existente, ingresa otro");
  }
  const newParticipant = await ParticipantModel.save(participant);
  const participantDB = await ParticipantModel.findOneBy({
    id: newParticipant.id,
  });
  if (!participantDB) throw new Error('Error creando el usuario')
  return participantDB;
};
