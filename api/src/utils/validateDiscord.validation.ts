const validateDiscord = (discord: string) => {
  if (!discord) throw new Error("Ingresa discord a modificar");
  if (typeof discord !== "string")
    throw new Error("Se debe ingresar un string");
  if (discord.length < 3)
    throw new Error("El discord debe tener 3 o más caracteres");
  if (discord.length > 15)
    throw new Error("El discord debe tener 15 o menos caracteres");
};

export default validateDiscord;
