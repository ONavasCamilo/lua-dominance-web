import { seedRoles } from "./role.seeder";

async function initSeeders() {
    console.log('Iniciando creación seeders..');
    const initialSeeders = [...seedRoles()]
    await Promise.all(initialSeeders)
    console.log("Finished role seeder");
}

export default initSeeders;