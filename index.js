import express from "express"
import cors from 'cors'
import { MongoClient } from 'mongodb';

const app = express()
const port = process.env.PORT || 5000


// middleware

app.use(express.json())
app.use(cors())

const client = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.w23gcv8.mongodb.net/`);

app.get('/', (req, res) => {
  res.send('Hireloop is looping')
})

app.listen(port, () => {
  console.log(`hireloop is running on port ${port}`)
})