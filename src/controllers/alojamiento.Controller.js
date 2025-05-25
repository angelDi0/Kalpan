import { Alojamiento } from "../models/Alojamiento.js";

export const crearAlojamiento = async (req, res) => {
    try {
        const { titulo_anuncio, ubicacion, precio, tipo, no_habitacion, no_banios, superficie, descripcion, amenidades, servicios, estacionamiento, reglas } = req.body;

        const newAlojamiento = await Alojamiento.create({
            titulo_anuncio, ubicacion, precio, tipo, no_habitacion, no_banios, superficie, descripcion, amenidades, servicios, estacionamiento, reglas
        });

        console.log(newAlojamiento);
        res.status(200).json({message: "Alojamiento creado correctamente!!, ", newAlojamiento});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
export const getAlojamientos = async (req, res) => {
  try {
    const alojamientos = await Alojamiento.findAll();
    res.status(200).json(alojamientos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener alojamientos" });
  }
};