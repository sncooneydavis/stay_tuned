import '../styles/CartPrice.css';

export function CartPrice({ subtotal, tax, shipping, total, onCheckout }) {
  return (
    <div className="cart-price">
      <div className="cart-price__rows">
        <div className="cart-price__row">
          <span className="cart-price__label">subtotal</span>
          <span className="cart-price__value">{subtotal}</span>
        </div>
        <div className="cart-price__row">
          <span className="cart-price__label">tax</span>
          <span className="cart-price__value">{tax}</span>
        </div>
        <div className="cart-price__row">
          <span className="cart-price__label">shipping</span>
          <span className="cart-price__value">{shipping}</span>
        </div>
        <div className="cart-price__row">
          <span className="cart-price__label cart-price__label--total">Total</span>
          <span className="cart-price__value cart-price__value--total">{total}</span>
        </div>
      </div>
      <button type="button" className="cart-price__checkout" onClick={onCheckout}>
        Checkout
      </button>
    </div>
  );
}
