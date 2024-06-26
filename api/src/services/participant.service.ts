import { signUpDto, updatePasswordDto } from "../dto/participant.dto";
import ParticipantModel from "../repositories/participant.repository";
import RoleModel from "../repositories/role.repository";
import { comparePassword, hashPassword } from "../utils/passwordManager";

export const getParticipantsService = async () => {
  const participants = await ParticipantModel.find({
    relations: ["participations", "participations.tournament"],
  });
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
  const hashedPassword = await hashPassword(participant.password);
  const newParticipant = ParticipantModel.create({
    ...participant,
    password: hashedPassword,
  });
  await RoleModel.asignRole(newParticipant);
  await ParticipantModel.save(newParticipant);
  const { password, ...withoutPassword } = newParticipant;
  return withoutPassword;
};

export const signInService = async (nick: string, password: string) => {
  const participant = await ParticipantModel.findOne({
    where: { nick },
    select: ['id', 'password', 'nick', 'discord', 'numberOfParticipations'],
    relations: ["role"],
  });
  if (!participant) throw new Error("Credenciales incorrectas");
  const validPassword = await comparePassword(password, participant.password);
  if (!validPassword) throw new Error("Credenciales incorrectas");
  const { password: _, ...withoutPassword } = participant;
  return withoutPassword;
};

export const updateDiscordParticipantService = async (
  id: string,
  discord: string
) => {
  const participant = await ParticipantModel.findOneBy({ id });
  if (!participant) throw new Error("No existe usuario con ese id");
  if (participant.discord === discord)
    throw new Error("El discord debe ser diferente al actual");
  participant.discord = discord;
  await ParticipantModel.save(participant);
  return participant
};

export const updatePasswordParticipantService = async (
  id: string,
  { password }: updatePasswordDto
) => {
  const participant = await ParticipantModel.findOneBy({ id });
  if (!participant) throw new Error("No existe usuario con ese id");
  const samePassword = await comparePassword(password, participant.password);
  if (samePassword)
    throw new Error("La contraseña debe ser diferente a la actual");
  const hashedPassword = await hashPassword(password);
  participant.password = hashedPassword;
  await ParticipantModel.save(participant);
  const { password: _, ...withoutPassword } = participant;
  return withoutPassword;
};
