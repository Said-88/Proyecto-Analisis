import express from "express";
import productsRoutes from './routes/estudiante.routes.js'
//import indexRoutes from './routes/index.route.js'
// Config express

const app = express();

app.set('port', process.env.PORT || 3000)

app.use(express.json())

//app.use(indexRoutes)
app.use(productsRoutes)

app.use((req,res,next) => {
    res.status(404).json({
        message: "endpoint not found"
    })
})

export default app; 