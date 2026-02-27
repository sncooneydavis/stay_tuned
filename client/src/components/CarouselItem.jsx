import '../styles/CarouselItem.css';

export function CarouselItem({ imageUrl, artist, album, price, onAddToCart }) {
  return (
    <div className="carousel-item">
      <img
        src={imageUrl}
        alt={`${artist} - ${album}`}
        className="carousel-item__image"
      />
      <div className="carousel-item__text">
        <p className="carousel-item__title">{artist} - {album}</p>
        <p className="carousel-item__price">{price}</p>
      </div>
      <button className="carousel-item__btn" onClick={onAddToCart}>
        add to cart
      </button>
    </div>
  );
}
