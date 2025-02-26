const { Router } = require("express")
const  DogsController  = require("../controller/dogs-controller.js")
const  UserController  = require("../controller/user-controller.js")
const  SessionsController  = require("../controller/sessions-controller.js")
const ensureAuthenticate = require("../middlewares/ensureAuthenticate.js")

const routes = Router()

const dogController = new DogsController()
const userController = new UserController()

const sessionController = new SessionsController()


// Dog Routes
routes.post('/dog', ensureAuthenticate, dogController.create)
routes.get('/dog', ensureAuthenticate, dogController.list)

// User Routes
routes.post('/users', userController.create)

// Sessions Routes
routes.post('/sessions', sessionController.create)

module.exports = routes