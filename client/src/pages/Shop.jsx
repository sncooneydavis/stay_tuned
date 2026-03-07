import { useState } from 'react';
import { CarouselItem } from '../components/CarouselItem';
import { ShopFilter } from '../components/ShopFilter';
import { ShopSorter } from '../components/ShopSorter';
import { ShopPagination } from '../components/ShopPagination';
import { Footer } from '../components/Footer';
import '../styles/Shop.css';

const ITEMS_PER_PAGE = 20;

// Filler data — will be replaced with Shopify product data
const FILLER_ITEMS = Array.from({ length: 20 }, (_, i) => ({
  imageUrl: `/filler/album${(i % 3) + 1}.png`,
  artist: 'Olivia Dean',
  album: 'The Art of Loving',
  price: '$19.99',
}));

const TOTAL_PRODUCTS = 3245;
const TOTAL_PAGES = Math.ceil(TOTAL_PRODUCTS / ITEMS_PER_PAGE);

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return (
    <>
      <div className="shop">
        <div className="shop__title-container">
          <h1 className="shop__heading">Records</h1>
          <span className="shop__product-count">({TOTAL_PRODUCTS.toLocaleString()} products)</span>
        </div>

        <div className="shop__controls">
          <ShopFilter />
          <ShopSorter />
        </div>

        <div className="shop__grid">
          {FILLER_ITEMS.map((item, i) => (
            <CarouselItem
              key={i}
              imageUrl={item.imageUrl}
              artist={item.artist}
              album={item.album}
              price={item.price}
              onAddToCart={() => {}}
            />
          ))}
        </div>

        <div className="shop__controls">
          <ShopPagination
            currentPage={currentPage}
            totalPages={TOTAL_PAGES}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
