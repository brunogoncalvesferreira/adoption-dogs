import { Router } from "express";
import { DogsController } from "../controller/dogs-controller.js";
import { ViewsController } from "../controller/views.controller.js";

export const routes = Router()

const dog = new DogsController()
const view = new ViewsController()

routes.post('/dogs', dog.create)
routes.get('/adotar', dog.list)

/* routes.put('/')

routes.delete('/') */

// Views Routes
routes.get('/', view.index)
routes.get('/sobre', view.about)
routes.get('/doacao', view.donation)
