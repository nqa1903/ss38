import React, { memo } from 'react';

interface Product {
    id: number;
    productName: string;
    price: number;
    quantity: number;
}

// Define ProductItem component
const ProductItem: React.FC<{ product: Product }> = memo(({ product }) => {
    console.log(`Rendering ProductItem ${product.id}`);
    
    return (
        <div>
            <p>ID: {product.id}</p>
            <p>Name: {product.productName}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </div>
    );
});

export default ProductItem;
