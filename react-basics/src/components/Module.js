import React from 'react';

const NavBtton = ({ name, url }) => {
  return (
    <a href={url} className="navigation-button">
      {name}
    </a>
  );
}

const Header = ({ title, menus }) => {
  return (
    <div className="header">

      <div className="company">
        <h1>{title}</h1>
      </div>
      <div className="navigation-buttons">
        {menus.map(menu => (
          <NavBtton key={menu.id} name={menu.name} url={menu.url} />
        ))}
        
      </div>
    </div>
  );
}

const ItemCard = ({ item, addToCart }) => {
  const handleClick = () => {
    addToCart(item);
  };

  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} />

      <h3>{item.name}</h3>

      <p>${item.price}</p>

      <button className="add-to-cart" onClick={handleClick}>Add to Cart</button>
    </div>
  );
}
  
const ShoppingCart = ({ cart, removeFromCart }) => {

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart Total : ({totalItems})</h2>

      {cart.map(item => (
        <div key={item.id} className="cart-item">

          <h3>{item.name} - ${item.price} x {item.quantity}</h3>
          <button className="remove-button"  onClick={() => removeFromCart(item)}> Remove </button>

        </div>
      ))}
    </div>
  );
}

export { Header, ItemCard, ShoppingCart };
