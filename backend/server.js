import path from 'path'
import 'dotenv/config'
import express from 'express'
import cookieParser from 'cookie-parser'
import './config/database.js'
import { app, server } from './socket/socket.js'
import { router as authRouter } from './routes/auth.route.js'
import { router as messageRouter } from './routes/message.route.js'
import { router as userRouter } from './routes/user.router.js'

const port = process.env.PORT || 3000
const __dirname = path.resolve()

app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/frontend/dist')))
app.use('/api/auth', authRouter)
app.use('/api/messages', messageRouter)
app.use('/api/users', userRouter)

app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, "frontend","dist","index.html"))
})

server.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})
