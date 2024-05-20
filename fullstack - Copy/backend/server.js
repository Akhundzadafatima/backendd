const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose');

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
dotenv.config()
const { Schema } = mongoose

const PORT = process.env.PORT
const DB = process.env.DB_URL

const productSchema = new Schema({
    image: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
})
const Product = mongoose.model("Product", productSchema)
app.post("/products", async (req, res) => {
    try {
        const { image, title, price } = req.body
        const product = new Product({
            image,
            title,
            price,
        })
        await product.save()
        res.status(201).send(product)
    } catch (error) {
        res.status(500).send(error)
    }
})
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).send(products)

    } catch (error) {
        res.status(500).send(error)
    }
})


mongoose.connect(DB)
    .then(() => console.log('Connected!'));

app.listen(PORT, () => console.log("Port Running", PORT))
