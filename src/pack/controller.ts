import { Router } from "express";
import { getPack, getPackByProduct } from "./service";

const packsRouter = Router();

packsRouter.get("/:id", (req, res) => {
    const { id } = req.params;

    getPack(parseInt(id))
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
});

packsRouter.get("/product/:id", (req, res) => {
    const { id } = req.params;

    getPackByProduct(parseInt(id))
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
});

export default packsRouter;