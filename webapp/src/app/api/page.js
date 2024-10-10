"use client";
import { useState } from 'react';

export default function Page() {
// button to click to call api
// function that calls the api
// somewhere to output the data i got back
// iterator to work through the data and format it
// display an empty and fulfilled state
// create a state to contain my data

const [products, setProducts] = useState(null);
const API_URL = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

async function fetchProducts() {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data);
}

const ProductOutput = () => {
        if (products) {
                
                let productsList = [];

                products.forEach((product, index) => {
                        productsList.push (
                        <li key={index}>
                                {product.name}
                        </li>
                        )
                })

                return (
                        <div className="p-4 mb-4 border-4 border-black text-center">🌭🌭🌭 Our Products Should be here! 🌭🌭🌭
                                <ul>{productsList}</ul>
                        </div>
                )
        }
                return (
                        <div className="p-4 mb-4 border-4 border-black text-center">🌭🌭🌭 No Products Yet! 🌭🌭🌭</div>
                )
}

        return (
          <div className="p-4 bg-yellow-300">
                <header className="p-4 mb-4 border-4 border-black text-center">
                        <h1 className="text-4xl mb-4">Welcome to My Product Page!</h1>
                        <button 
                                className="text-yellow-200 bg-black p-4" 
                                onClick={fetchProducts}
                        >🌭 Fetch Products!</button>
                </header>
                <ProductOutput />
          </div>
        );
}
      