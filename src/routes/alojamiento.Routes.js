import { Router } from "express";
import { crearAlojamiento, getAlojamientos } from "../controllers/alojamiento.Controller.js";
import { uploads } from "../middlewares/uploads.js";

const router = Router();

router.post('/crearAlojamiento', uploads.array('imagen'), crearAlojamiento);
router.get('/alojamientos', getAlojamientos);

export default router;