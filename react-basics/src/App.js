import React, { useState } from 'react';
import { Header, ItemCard, ShoppingCart } from './components/Module.js';
import './App.css';

const menus = [
  { name: "Appliances", url: "#", id: 1 },
  { name: "Groceries", url: "#", id: 2 },
  { name: "Gadgets", url: "#", id: 3 },
  { name: "Clothing", url: "#", id: 4 },
];

const products = [
  { 
    id: 1, 
    name: 'Plant 1', 
    price: 25.60, 
    image: 'https://cdn.shopify.com/s/files/1/0059/8835/2052/products/White_Dogwood_15_FGT.jpg' 
  },
  { 
    id: 2, 
    name: 'Plant 2', 
    price: 28.99, 
    image: 'https://cdn.shopify.com/s/files/1/0059/8835/2052/files/Pink_Dogwood_2_FGT.jpg' 
  },
  { 
    id: 3, 
    name: 'Plant 3', 
    price: 25.99, 
    image: 'https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Red_Twig_Dogwood_5_FGT.jpg' 
  },
  {
  id: 4, 
  name: 'Plant 4', 
  price: 22.99, 
  image: 'https://cdn.shopify.com/s/files/1/0059/8835/2052/files/Kousa_Dogwood_12_FGT_47e10715-4e7c-4dd0-ae29-82e73fe9640f.jpg' 
  },
  {
    id: 5, 
    name: 'Plant 5', 
    price: 21.99, 
    image: 'https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Cherokee_Brave_Dogwood_1_FGT.jpg' 
    }
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } 
    
    else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    console.log(`Added ${item.name} to the cart!`);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
    setCart(updatedCart);
    console.log(`Removed ${itemToRemove.name} from the cart!`);
  };

  return (
    <div className="App">
      <Header title="Lazado" menus={menus} />

      <div className="content">

        <div className="item-container">

          {products.map(product => (
            <ItemCard key={product.id} item={product} addToCart={addToCart} />
          ))}

        </div>

        <ShoppingCart cart={cart} removeFromCart={removeFromCart} />

      </div>
    </div>
  );
}

export default App;
