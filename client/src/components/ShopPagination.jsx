import { useState, useRef, useEffect } from 'react';
import '../styles/ShopPagination.css';

export function ShopPagination({ currentPage, totalPages, onPageChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  function handlePageClick() {
    setInputValue(String(currentPage));
    setIsEditing(true);
  }

  function commitPage() {
    const parsed = parseInt(inputValue, 10);
    if (!isNaN(parsed) && parsed >= 1 && parsed <= totalPages) {
      onPageChange(parsed);
    }
    setIsEditing(false);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      commitPage();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
    }
  }

  return (
    <div className="shop-pagination">
      <button
        className="shop-pagination-btn shop-pagination-btn--back"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirst}
        aria-label="Previous page"
      >
        {!isFirst && <>&larr; Back</>}
      </button>

      <button
        className="shop-pagination-btn shop-pagination-btn--page"
        onClick={handlePageClick}
        aria-label="Go to page"
      >
        {isEditing ? (
          <input
            ref={inputRef}
            className="shop-pagination-input"
            type="text"
            inputMode="numeric"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={commitPage}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <>{currentPage} / {totalPages}</>
        )}
        {/* Keep " / {totalPages}" visible while editing so layout stays stable */}
        {isEditing && <span> / {totalPages}</span>}
      </button>

      <button
        className="shop-pagination-btn shop-pagination-btn--next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLast}
        aria-label="Next page"
      >
        {!isLast && <>Next &rarr;</>}
      </button>
    </div>
  );
}
