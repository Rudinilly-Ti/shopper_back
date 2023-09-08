import cors from 'cors';
import express from 'express';
import packsRouter from './pack/controller';
import productsRouter from './product/controller';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/products', productsRouter);
app.use('/packs', packsRouter);

app.listen(3000, () => {  
    console.log('Server is running on port 3000');
});