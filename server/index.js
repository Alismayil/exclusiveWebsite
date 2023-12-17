const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose');
const { Schema } = mongoose;
const cors = require('cors')

app.use(express.json())
app.use(cors())

//  ------------- Flash -----------------
const FlashSchema = new Schema({
    rating: { type: Number },
    newPrice: { type: Number },
    oldPrice: { type: Number },
    comment: { type: Number },
    abate: { type: Number },
    name: { type: String },
    image: { type: String },
   
}, { timestamps: true });
const Flash = mongoose.model('Flash', FlashSchema);


app.get('/flash', async (req, res) => {
    const data = await Flash.find({})
    res.send(data)
})


app.get('/flash/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await Flash.findById(id).exec()
        res.send(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


app.delete('/flash/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await Flash.findByIdAndDelete(id).exec()
        res.send(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


app.post('/flash', async (req, res) => {
    try {
        const data = Flash({ ...req.body })
        await data.save()
        res.json(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


app.put('/flash/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await Flash.findByIdAndUpdate(id, req.body).exec()
        res.send(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


//  ------------- Selling -----------------

const SellingSchema = new Schema({
    rating: { type: Number },
    newPrice: { type: Number },
    oldPrice: { type: Number },
    comment: { type: Number },
    abate: { type: Number },
    name: { type: String },
    image: { type: String },
   
}, { timestamps: true });
const Selling = mongoose.model('Selling', SellingSchema);


app.get('/selling', async (req, res) => {
    const data = await Selling.find({})
    res.send(data)
})


app.get('/selling/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await Selling.findById(id).exec()
        res.send(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


app.delete('/selling/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await Selling.findByIdAndDelete(id).exec()
        res.send(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


app.post('/selling', async (req, res) => {
    try {
        const data = Selling({ ...req.body })
        await data.save()
        res.json(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


app.put('/selling/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await Selling.findByIdAndUpdate(id, req.body).exec()
        res.send(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


//  ------------- ExploreOne -----------------

const ExploreOneSchema = new Schema({
    rating: { type: Number },
    newPrice: { type: Number },
    oldPrice: { type: Number },
    comment: { type: Number },
    abate: { type: Number },
    name: { type: String },
    image: { type: String },
   
}, { timestamps: true });
const ExploreOne = mongoose.model('ExploreOne', ExploreOneSchema);


app.get('/exploreOne', async (req, res) => {
    const data = await ExploreOne.find({})
    res.send(data)
})


app.get('/exploreOne/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await ExploreOne.findById(id).exec()
        res.send(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


app.delete('/exploreOne/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await ExploreOne.findByIdAndDelete(id).exec()
        res.send(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


app.post('/exploreOne', async (req, res) => {
    try {
        const data = ExploreOne({ ...req.body })
        await data.save()
        res.json(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


app.put('/exploreOne/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await ExploreOne.findByIdAndUpdate(id, req.body).exec()
        res.send(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


//  ------------- ExploreTwo -----------------

const ExploreTwoSchema = new Schema({
    rating: { type: Number },
    newPrice: { type: Number },
    oldPrice: { type: Number },
    comment: { type: Number },
    abate: { type: Number },
    name: { type: String },
    image: { type: String },
   
}, { timestamps: true });
const ExploreTwo = mongoose.model('ExploreTwo', ExploreTwoSchema);


app.get('/exploreTwo', async (req, res) => {
    const data = await ExploreTwo.find({})
    res.send(data)
})


app.get('/exploreTwo/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await ExploreTwo.findById(id).exec()
        res.send(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


app.delete('/exploreTwo/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await ExploreTwo.findByIdAndDelete(id).exec()
        res.send(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


app.post('/exploreTwo', async (req, res) => {
    try {
        const data = ExploreTwo({ ...req.body })
        await data.save()
        res.json(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


app.put('/exploreTwo/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await ExploreTwo.findByIdAndUpdate(id, req.body).exec()
        res.send(data)
    } catch (error) {
        res.status(500).send("This is Error");
    }
})


mongoose.connect('mongodb+srv://AliIsmayil:ali123@cluster0.tzldidp.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})