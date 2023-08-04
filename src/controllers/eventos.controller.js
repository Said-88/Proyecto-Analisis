import { getConnection, sql } from "../../db/connection.js"; //poner extension si es un modulo externo
import {queries} from "../../db/querys.js"; 
// // Lo que ejecutan las routes cuando son llamadas

export const getEventos = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllEventos);
        res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
}


export const getEventosbyid = async (req,res) => {
  try {
    const { id } = req.params; // Suponiendo que el ID se encuentra en los parámetros de la solicitud.
    const pool = await getConnection();
    const result = await pool.request()
      .input('id',sql.Int, id) // Pasamos el valor del ID al parámetro @id en el query
      .query(queries.getEventoById); // Utilizamos el query definido previamente
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}


export const createEvento =  async (req, res) => { //consultas con la db son async
    const { nombre, fecha, lugar, tipo, descrip, image, puntos } = req.body;
  let { quantity } = req.body;
  if (nombre == null || fecha == null || lugar == null || tipo == null || descrip == null || puntos == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields." });
  }
  if (quantity == null) quantity = 0;

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("fecha", sql.DateTime, fecha)
      .input("lugar", sql.VarChar, lugar)
      .input("tipo", sql.Int, tipo)
      .input("descrip", sql.VarChar, descrip)
      .input("image", sql.VarChar, image)
      .input("puntos", sql.Int, puntos)
      .query(queries.addNewEvento);
    res.json({
      nombre,
      fecha,
      lugar,
      tipo,
      descrip,
      image,
      puntos,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}



export const updateEventos = async (req, res) => {
    const { id, nombre, fecha, lugar, tipo, descrip, image, puntos } = req.body;
    let { quantity } = req.body;
    if (id == null || nombre == null || fecha == null || lugar == null || tipo == null || descrip == null || puntos == null) {
      return res.status(400).json({ msg: "Bad Request. Please fill all fields." });
    }
    if (quantity == null) quantity = 0;
    try {
      const pool = await getConnection();
      await pool
        .request()
        .input("id", sql.Int, id)
        .input("nombre", sql.VarChar, nombre)
        .input("fecha", sql.VarChar, fecha)
        .input("lugar", sql.VarChar, lugar)
        .input("tipo", sql.Int, tipo)
        .input("descrip", sql.VarChar, descrip)
        .input("image", sql.VarChar, image)
        .input("puntos", sql.Int, puntos)
        .query(queries.updateEvento);
      res.json({
        id,
        nombre,
        fecha,
        lugar,
        tipo,
        descrip,
        image,
        puntos,
      });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
}


