import 'dotenv/config'
import express from 'express'
import cookieParser from 'cookie-parser'
import './config/database.js'
import { app, server } from './socket/socket.js'
import { router as authRouter } from './routes/auth.route.js'
import { router as messageRouter } from './routes/message.route.js'
import { router as userRouter } from './routes/user.router.js'

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/messages', messageRouter)
app.use('/api/users', userRouter)

server.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})
