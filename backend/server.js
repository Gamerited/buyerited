import express from 'express';
import data from './data.js'; // server side append the extentsion

const app = express();

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

app.get('/', (req, res) => {
    res.send('Server is running');
});
const port = process.env.port || 9000;
app.listen(port, () => {
    console.log(`Running at port ${port}`);
});
