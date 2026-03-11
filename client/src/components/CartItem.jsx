import { useState } from 'react';
import '../styles/CartItem.css';

export function CartItem({ imageUrl, artist, album, price }) {
  const [quantity, setQuantity] = useState(1);

  function decrement() {
    setQuantity(q => Math.max(1, q - 1));
  }

  function increment() {
    setQuantity(q => q + 1);
  }

  return (
    <div className="cart-item">
      <img
        src={imageUrl}
        alt={`${artist} - ${album}`}
        className="cart-item__image"
      />
      <div className="cart-item__body">
        <div className="cart-item__text">
          <p className="cart-item__artist">{artist}</p>
          <p className="cart-item__album">{album}</p>
          <p className="cart-item__price">{price}</p>
        </div>
        <div className="cart-item__counter">
          <button type="button" className="cart-item__counter-btn" onClick={decrement}>-</button>
          <span className="cart-item__counter-value">{quantity}</span>
          <button type="button" className="cart-item__counter-btn" onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}
