import express from 'express';
import mongoose from 'mongoose';
import data from './data.js'; // server side append the extentsion
import userRouter from './routers/userRouter.js';

const app = express();

mongoose.connect('mongodb://localhost/buyerited', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not found' })
    }
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use((err, req, res, next) =>{
    res.status(500).send({message: err.message});
});

const port = process.env.port || 9000;
app.listen(port, () => {
    console.log(`Running at port ${port}`);
});
