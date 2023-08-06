import express from "express";
import cors from "cors";
import usuariosRoutes from "./routes/usuarios.routes.js";
import registrosRoutes from "./routes/registros.routes.js";
import eventosRoutes from "./routes/eventos.routes.js";
import estudiantesRoutes from "./routes/estudiantes.routes.js";
//import indexRoutes from './routes/index.route.js'
// Config express

const app = express();

app.set('port', process.env.PORT || 3000)

app.use(cors())
app.use(express.json())

//app.use(indexRoutes)
app.use(usuariosRoutes)
app.use(registrosRoutes)
app.use(eventosRoutes)
app.use(estudiantesRoutes)

app.use((req,res,next) => {
    res.status(404).json({
        message: "endpoint not found"
    })
})

export default app; 