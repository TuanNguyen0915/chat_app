import mongoose from "mongoose";

const db = mongoose.connection
mongoose.connect(process.env.MONGO_URI)
db.on('connected', ()=> {
  console.log(`Mongo connect at ${db.name}`)
})