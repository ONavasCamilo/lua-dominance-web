import { AppDataSource } from "../config/typeorm";
import { Participant } from "../entities/participant.entity";
import { Role } from "../entities/role.entity";

const RoleModel = AppDataSource.getRepository(Role).extend({
  async asignRole(participant: Participant) {
    const role = await RoleModel.findOneBy({ role: 'admin' });
    if (!role) throw new Error("internal error");
    participant.role = role;
    return participant;
  },
});

export default RoleModel;
