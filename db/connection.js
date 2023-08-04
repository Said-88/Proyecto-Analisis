import {config} from "dotenv";
import sql from "mssql";

config();

const dbSettings  = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

export const getConnection = async () => {
    try {
      const pool = await sql.connect(dbSettings)
       return pool; 
      // para probar la conexion con la base de datos
      // const result = await pool.request().query('SELECT 1')
      // console.log(result)
    } catch (error) {
      console.log(error)
    }
}

export {sql};

