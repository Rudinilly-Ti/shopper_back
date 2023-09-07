import database from "../database";

export async function getPackById(id: number): Promise<Pack[]> {
    const query = `SELECT * FROM packs WHERE pack_id = ${id}`;

    return new Promise((resolve, reject) => {
        database.query(query, (err, result) => {
            if (err) {
                reject(err);
            }
            
            resolve(result);
        });
    });
}

export async function getPackByProductId(id: number): Promise<Pack[]> {
    const query = `SELECT * FROM packs WHERE product_id = ${id}`;

    return new Promise((resolve, reject) => {
        database.query(query, (err, result) => {
            if (err) {
                reject(err);
            }
            
            resolve(result);
        });
    });
}