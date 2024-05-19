import React, { useMemo } from 'react';
import ProductItem from './ProductItem';

interface Product {
    id: number;
    productName: string;
    price: number;
    quantity: number;
}

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
    console.log("Rendering ProductList");
    
    const productList = useMemo(() => (
        products.map(product => (
            <ProductItem key={product.id} product={product} />
        ))
    ), [products]);

    return (
        <div>
            {productList}
        </div>
    );
}

export default function Cau7() {
    const products: Product[] = [
        { id: 1, productName: 'Product 1', price: 10, quantity: 1 },
        { id: 2, productName: 'Product 2', price: 15, quantity: 2 },
        { id: 3, productName: 'Product 3', price: 20, quantity: 3 }
    ];

    return (
        <div>
            Câu 7
            <ProductList products={products} />
        </div>
    );
}
