import database from '../database';

type Product = {
    code: number;
    name: string;
    sales_price: number;
    cost_price: number;
}

export async function getProductById(id: string): Promise<Product[]> {
    const query = `SELECT * FROM products WHERE code = ${id}`;

    return new Promise((resolve, reject) => {
        database.query(query, (err, result) => {
            if (err) {
                reject(err);
            }
            
            resolve(result);
        });
    });
}

export async function updateProduct(id: string, sales_price: number) {
    const query = `UPDATE products SET sales_price = ${sales_price} WHERE code = ${id}`;

    return new Promise((resolve, reject) => {
        database.query(query, (err, result) => {
            if (err) {
                reject(err);
            }
            
            resolve(result);
        });
    });
};