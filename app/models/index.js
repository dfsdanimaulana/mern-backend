
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose
db.url = process.env.DB_URL

export default db