const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://testuser:testuser123@cluster1.aqdq6.mongodb.net/myFirstDatabase?retryWrites=true://localhost/MyDB'

const app = express()

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const con = mongoose.connection

con.on('open', () => {
    console.log("connected")
})
const bookRouter = require('./routes/bookRouter');
app.use('/books', bookRouter)
app.use(express.urlencoded());
app.use(express.json());


app.listen(9000, () => {

    console.log('Server started')
})
