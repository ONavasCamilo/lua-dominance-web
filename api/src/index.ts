import app from "./app";
import { PORT } from "./config/envs";

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
})