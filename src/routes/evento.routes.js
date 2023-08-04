import { Router } from "express";
import {
 getEventos,
 createEvento,
 updateEventos,
 getEventosbyid,
} from "../controllers/eventos.controller.js";

const router = Router();

router.get("/eventos", getEventos);

// El :id esta relacionado con express
router.get("/eventos/:id", getEventosbyid);

router.post("/eventos", createEvento);
// // put es update
// //patch es solo para actualizar algunos datos
router.patch("/eventos/:id", updateEventos);


export default router;
