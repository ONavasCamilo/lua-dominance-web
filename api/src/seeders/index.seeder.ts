import { seedRoles } from "./role.seeder";
import { seedTournaments } from "./tournaments.seeder";

async function initSeeders() {
    console.log('Iniciando creación seeders..');
    const initialSeeders = [...seedRoles(), ...seedTournaments()]
    await Promise.all(initialSeeders)
    console.log("Finished seeders");
}

export default initSeeders;