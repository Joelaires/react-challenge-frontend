import React, { useState } from 'react';
import ProductList from './pages/Product/ProductList';
import ProductDetails from './pages/Product/ProductDetails';
import ShoppingCart from './components/Cart/ShoppingCart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (product) => product.id !== item.id
    );
    setCartItems(updatedCartItems);
  };

  const products = [
    { id: 1, name: 'Refresco 2L', description: 'Coca-Cola é um refrigerante carbonatado vendido em lojas.', price: 90 },
    { id: 2, name: 'Água Namaacha 1.5L', description: 'Água potável é a água de qualidade suficiente para consumo humano.', price: 40 },
    { id: 3, name: 'Sumo Compal 1L', description: 'Sumo Compal da Terra Gengibre e Mel, 1 L', price: 110 },
  ];

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ProductList products={products} addToCart={addToCart} />
      <hr />
      <h1>Detalhes do Produto</h1>
      <ProductDetails
        product={
          cartItems.length > 0
            ? cartItems[cartItems.length - 1]
            : { id: 0, name: '', description: '', price: 0 }
        }
      />
      <hr />
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
