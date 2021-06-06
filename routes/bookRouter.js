const express = require('express')
const router = express.Router();
const bodyParser = require("body-parser");
const Book = require('../models/books')
router.use(bodyParser.urlencoded({
    extended: true
}));

router.use(bodyParser.json());



router.get('/', async (req, res) => {
    try {
        const bookVal = await Book.find();
        res.send(bookVal);

    } catch (err) {
        res.send('Error ' + err)
    }
});

router.post('/', async (req, res) => {
    const book = new Book({
        name: req.body.name,
        category: req.body.category,
        author: req.body.author,
    })

    try {
        const a1 = await book.save()
        res.json(a1)
    } catch (err) {
        res.send('Error' + err)
    }
})


router.get('/:id', async (req, res) => {
    console.log('Inside the get method' + req.params.id)
    try {
        const book = await Book.findById(req.params.id)
        res.json(book)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        book.name = req.body.name
        book.category = req.body.category
        book.author = req.body.author
        const a1 = await book.save()
        res.json(a1)
    } catch (err) {
        res.send('Error'+err)
    }

})

router.delete('/:id', async(req,res) => {
   const requestId = req.params.id;
   console.log("requestId :: "+requestId)
   await Book.findByIdAndDelete(requestId)
   res.send('Deleted')
});

module.exports = router