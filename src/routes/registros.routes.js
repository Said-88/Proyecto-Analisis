import { Router } from "express";
import { createRegistro, getRegistroById, getregistro, udpdateRegistroById } from "../controllers/registro.controller.js";

const router = Router();

router.get("/registro", getregistro);

// El :id esta relacionado con express
router.get("/registro/:id", getRegistroById);

router.post("/registro", createRegistro);
// // put es update
// //patch es solo para actualizar algunos datos
router.put("/registro/:id", udpdateRegistroById);


export default router;
