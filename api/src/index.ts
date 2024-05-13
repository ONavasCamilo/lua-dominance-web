import app from "./app";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/typeorm";

AppDataSource.initialize()
  .then(() => {
    console.log("Conectado a la base de datos");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error:", err);
  });
