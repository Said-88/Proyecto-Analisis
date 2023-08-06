import { Router } from "express";
import {
 getEventos,
 createEvento,
 updateEventos,
 getEventosbyid,
 deleteEventoById,
} from "../controllers/eventos.controller.js";

const router = Router();

router.get("/evento", getEventos);

// El :id esta relacionado con express
router.get("/evento/:id", getEventosbyid);

router.post("/evento", createEvento);
// // put es update
// //patch es solo para actualizar algunos datos
router.patch("/evento/:id", updateEventos);

router.delete("/evento/:id", deleteEventoById);

export default router;
