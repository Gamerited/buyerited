import express from 'express';
import data from './data.js'; // server side append the extentsion

const app = express();

app.get('/api/products', (req,res) => {
    res.send(data.products);
});

app.get('/', (req,res) => {
    res.send('Server is running');
});
const port= process.env.port || 9000;
app.listen(port, () => {
    console.log(`Running at port ${port}`);
});
