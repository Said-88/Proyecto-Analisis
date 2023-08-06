import { Router } from "express";
import {createEstudiante, getEstudiantes, getEstudiantesById, updateEstudianteById, deleteEstudianteById} from '../controllers/usuarios.controller.js'

const router = Router()

router.get("/estudiante", getEstudiantes);
// El :id esta relacionado con express 
router.get("/estudiante/:id", getEstudiantesById);
router.post("/estudiante", createEstudiante);
    // put es update 
    //patch es solo para actualizar algunos datos
router.patch("/estudiante/:id", updateEstudianteById);

router.delete("/estudiante/:id", deleteEstudianteById);

export default router;