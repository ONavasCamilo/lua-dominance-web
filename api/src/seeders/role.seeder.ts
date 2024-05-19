import { Role } from "../entities/role.entity";

const INITIAL_ROLES = ["admin", "user"];

export const seedRoles = () => {
  const rolesPromises = INITIAL_ROLES.map((role) => Role.insert({ role }));
  return rolesPromises;
};
