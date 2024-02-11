import { Router } from 'express'
import protectRoute from '../middlewares/protectRoute.js'
import * as userCtrl from '../controllers/user.controller.js'

const router = Router()

router.get('/', protectRoute, userCtrl.getUsers)

export { router }
