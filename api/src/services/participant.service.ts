import { signUpDto } from "../dto/participant.dto";
import ParticipantModel from "../repositories/participant.repository";

export const getParticipantsService = async () => {
  const participants = await ParticipantModel.find();
  return participants.map(
    ({ password, ...withoutPassowrd }) => withoutPassowrd
  );
};

export const getParticipantByIdService = async (id: string) => {
    const participant = await ParticipantModel.getParticipantByIdModel(id)
    return participant;
}

export const signUpService = async (participant: signUpDto) => {
    const newParticipant = await ParticipantModel.save(participant)
    return newParticipant
}
