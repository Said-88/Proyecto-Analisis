import { getConnection, sql } from "../../db/connection.js"; //poner extension si es un modulo externo
import { queries } from "../../db/querys.js";
// // Lo que ejecutan las routes cuando son llamadas

export const getUsers = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllUsers);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getEstudiantes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllEstudiantes);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params; // Suponiendo que el ID se encuentra en los parámetros de la solicitud.
    const pool = await getConnection();
    const result = await pool.request()
      .input('id',sql.Int, id) // Pasamos el valor del ID al parámetro @id en el query
      .query(queries.getUserById); // Utilizamos el query definido previamente
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getEstudiantesById = async(req,res)=>{
  try {
    const { id } = req.params; // Suponiendo que el ID se encuentra en los parámetros de la solicitud.
    const pool = await getConnection();
    const result = await pool.request()
      .input('id',sql.Int, id) // Pasamos el valor del ID al parámetro @id en el query
      .query(queries.getEstudiantesById); // Utilizamos el query definido previamente
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createUser = async (req, res) => {
  const { nombre, contra,tipo} = req.body;

  if (nombre == null || contra == null|| tipo==null ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields." });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("contra", sql.VarChar, contra)
      .input("tipo", sql.Int, tipo)
      .query(queries.addNewUser);
    res.json({
      nombre,
      contra,
      tipo,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createEstudiante = async (req, res) => {
  const { id, nombre, contra, puntos,estado } = req.body;
  let { quantity } = req.body;

  if (id == null || nombre == null || contra==null || puntos == null || estado == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields." });
  }
  if (quantity == null) quantity = 0;

  try {
    const pool = await getConnection();
    await pool
    .request()
    .input("id", sql.Int, id)
    .input("nombre", sql.VarChar, nombre)
    .input("contra", sql.VarChar, contra)
    .input("puntos", sql.Int, puntos)
    .input("estado", sql.Int, estado)
      .query(queries.addNewEstudiante);
    res.json({
      id,
      nombre,
      contra,
      puntos,
      estado
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const udpdateUserById = async (req, res) => {
  const { nombre, contra, tipo } = req.body;
  const { id } = req.params;

  if (nombre == null || contra == null || tipo == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields." });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("id", sql.Int, id)
      .input("nombre", sql.VarChar, nombre)
      .input("contra", sql.VarChar, contra)
      .input("tipo", sql.Int, tipo)
      .query(queries.updateUserById);
    res.json({
      nombre,
      contra,
      tipo,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateEstudianteById = async (req, res) => {
  const { id, nombre, contra, puntos,estado } = req.body;

  if (id == null || nombre == null || contra==null || puntos == null || estado == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields." });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("id", sql.Int, id)
      .input("nombre", sql.VarChar, nombre)
      .input("contra", sql.VarChar, contra)
      .input("puntos", sql.Int, puntos)
      .input("estado", sql.Int, estado)
      .query(queries.updateEstudianteById);
    res.json({
      id,
      nombre,
      contra,
      puntos,
      estado
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteEstudianteById = async (req, res) => {  
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id",id)
    .query(queries.deleteEstudianteById);
    res.send(result)
}

export const deleteUserById = async (req, res) => {  
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id",id)
    .query(queries.deleteUserById);
    res.send(result)
}