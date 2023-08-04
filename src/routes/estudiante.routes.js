import { Router } from "express";
import {createEstudiante, getEstudiantes, getEstudiantesById, updateEstudianteById} from '../controllers/usuarios.controller.js'

const router = Router()

router.get("/Estudiante", getEstudiantes);
// El :id esta relacionado con express 
router.get("/Estudiante/:id", getEstudiantesById);
router.post("/Estudiante", createEstudiante);
    // put es update 
    //patch es solo para actualizar algunos datos
router.patch("/Estudiante/:id", updateEstudianteById);


export default router;