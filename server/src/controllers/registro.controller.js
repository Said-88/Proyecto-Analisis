import { getConnection, sql } from "../../db/connection.js"; //poner extension si es un modulo externo
import {queries} from "../../db/querys.js"; 
// // Lo que ejecutan las routes cuando son llamadas

export const getregistro = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllRegistros);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

  export const getRegistroById = async (req,res) => {
    try {
      const { id } = req.params; // Suponiendo que el ID se encuentra en los parámetros de la solicitud.
      const pool = await getConnection();
      const result = await pool.request()
        .input('id',sql.Int, id) // Pasamos el valor del ID al parámetro @id en el query
        .query(queries.getRegistroById); // Utilizamos el query definido previamente
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const createRegistro = async (req, res) => {
  //consultas con la db son async
  const { evento, usuario, estudiante } = req.body;

  if (evento == null || usuario == null || estudiante == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields." });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("evento", sql.Int, evento)
      .input("usuario", sql.Int, usuario)
      .input("estudiante", sql.Int, estudiante)
      .query(queries.addNewRegistro);
    res.json({
      evento,
      usuario,
      estudiante,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

 export const udpdateRegistroById = async (req, res) => {
  const { evento, usuario, estudiante } = req.body;
  const { id } = req.params;

  if ( evento == null || usuario == null || estudiante == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields." });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("evento", sql.Int, evento)
      .input("usuario", sql.Int, usuario)
      .input("estudiante", sql.Int, estudiante)
      .input("id", sql.Int, id)
      .query(queries.updateRegistroById);
    res.json({
      id,
      evento,
      usuario,
      estudiante,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
 }

 export const deleteRegistroById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", sql.Int, id)
    .query(queries.deleteRegistroById);
   res.send(result);
}

 