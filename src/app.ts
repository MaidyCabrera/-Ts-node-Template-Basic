/**
 * Archivo principal del programa
 */

import express, { Application, NextFunction, Request, Response } from 'express'
import rutas_ejemplo from './routes/routes_ejemplo'

const app: Application = express()

/**
 * Agregar el stack un conjunto de rutas
 */
app.use('/', rutas_ejemplo)


/**
 * Respuesta cuando la ruta no existe
 */
app.use(
    (req:Request, res: Response, next: NextFunction)=>{
        res.status(404)
        res.json({message: "Upss. El recurso no existe"})
    }
)

/**
 * Respuesta cuando existe un error del servidor
 */
app.use(
    (error:Error, req:Request, res: Response, next: NextFunction)=>{
        res.status(500)
        console.log(error)
        res.json({message: "Houston tenemosm un problema!"})
    }
)

export default app