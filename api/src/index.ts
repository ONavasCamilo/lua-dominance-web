import app from "./app";
import { PORT, RESTART_SCHEMA } from "./config/envs";
import { AppDataSource } from "./config/typeorm";
import initSeeders from "./seeders/index.seeder";

AppDataSource.initialize()
  .then(() => {
    console.log("Conectado a la base de datos");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en: http://localhost:${PORT}`);
      if (RESTART_SCHEMA) {
        initSeeders();
      }
    });
  })
  .catch((err) => {
    console.log("Error:", err);
  });
