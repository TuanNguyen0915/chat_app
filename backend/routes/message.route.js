import { Router } from 'express'
import protectRoute from '../middlewares/protectRoute.js'
import * as messageCtrl from '../controllers/message.controller.js'

const router = Router()
router.post('/send/:id', protectRoute, messageCtrl.sendMessage)
router.get("/:id", protectRoute, messageCtrl.getMessages)

export { router }
