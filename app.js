import express from 'express'
import cors from 'cors'
import routes from './app/routes/post.route.js'


const app = express('./app/models/index.js')
const PORT = 3000

// konek ke mongodb
import db from './app/models/index.js'
db.mongoose
.connect(db.url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // izinkan untuk mencari suatu data dan mengubahnya
        useFindAndModify: true
    })
.then(()=> {
    console.log('database connected!')
})
.catch(err=> {
    console.log('Cannot connect to the database!', err)
    process.exit()
})

// ubah data request yg kita terima dalam bentuk json
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// kirim data dalam bentuk json

app.get('/', (req, res)=> {
    res.json({
        message: "welcome to my server"
    })
})


routes(app)

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})