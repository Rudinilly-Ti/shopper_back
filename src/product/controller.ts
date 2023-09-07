import { Router } from 'express';
import { getProduct, updateProductPrice, validateProduct } from './service';
const productsRouter = Router();

productsRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    getProduct(parseInt(id)).then((result) => { 
         res.json(result); 
    }).catch((err) => {
        res.status(400).json(err);
    });
});

productsRouter.post('/validate', async (req, res) => {
    const { id, sales_price } = req.body;
    return validateProduct(id, sales_price).then((result) => {
        res.json(result);
    }
    ).catch((err) => {
        res.status(400).json(err);
    });
});


productsRouter.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { sales_price } = req.body;
    
    return updateProductPrice(parseInt(id), sales_price).then((result) => { 
         res.json(result);
   }).catch((err) => {
         res.status(400).json(err);
   });
});

export default productsRouter;