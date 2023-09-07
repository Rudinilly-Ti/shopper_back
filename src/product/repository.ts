import database from '../database';

export async function getProductById(id: number): Promise<Product[]> {
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

export async function updateProduct(id: number, sales_price: number) {
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


