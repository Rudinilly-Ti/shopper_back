import { getProductById, updateProduct } from './repository';

export async function getProduct(id: number) {
    const products = await getProductById(id);
    const product = products[0];
    if (!product) {
        return { error: 'Product not found' };
    }

    return product;
}

export async function validateProduct(id: number, sales_price: number): Promise<string[]> {
    let errors: string[] = [];
    const products = await getProductById(id);
    const product = products[0];

    if (!sales_price) {
        errors.push('Price is required');
    }

    if(typeof sales_price !== 'number') {
        errors.push('Price must be a number');
    }

    if (sales_price < 0) {
        errors.push('Price cannot be negative');
    }

    if (sales_price < product.cost_price) {
        errors.push('Price cannot be less than cost price');
    }

    const percent = (sales_price - product.sales_price) / product.sales_price;

    if (percent > 0.1) {
        errors.push('Price cannot increase more than 10%');
    }

    return errors;
}

export function updateProductPrice(id: number, sales_price: number) {
    return updateProduct(id, sales_price);
};

