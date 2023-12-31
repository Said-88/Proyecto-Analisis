import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  udpdateUserById,
  deleteUserById,
} from "../controllers/usuarios.controller.js";

const router = Router();

router.get("/usuario", getUsers);
// El :id esta relacionado con express
router.get("/usuario/:id", getUserById);
router.post("/usuario", createUser);
// put es updates
//patch es solo para actualizar algunos datos
router.patch("/usuario/:id", udpdateUserById);

router.delete("/usuario/:id", deleteUserById);

export default router;
