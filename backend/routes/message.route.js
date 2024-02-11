import { Router } from 'express'
import protectRoute from '../middlewares/protectRoute.js'
import * as messageCtrl from '../controllers/message.controller.js'

const router = Router()
router.get("/:id", protectRoute, messageCtrl.getMessages)
router.post('/send/:id', protectRoute, messageCtrl.sendMessage)

export { router }
