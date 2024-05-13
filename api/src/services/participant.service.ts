import { ParticipantModel } from "../repositories/participant.repository"

export const getParticipantsService = async () => {
    const participants = await ParticipantModel.find();
    return participants;
}