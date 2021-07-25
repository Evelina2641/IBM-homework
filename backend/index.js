const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

const app = express()
const PORT = process.env.PORT || 5000

// Cors options
const corsOptions= { exposedHeaders: ['token']}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', routes)

const DB_URI = 'mongodb+srv://evelina2641:YIMEf77myzg7CkCr@cluster0.zryle.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then((res) => {
    console.log(`Server is running on port: ${PORT}`)
    app.listen(PORT)
})