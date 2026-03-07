import { ShopFilter } from '../components/ShopFilter';
import { ShopSorter } from '../components/ShopSorter';
import { ShopPagination } from '../components/ShopPagination';

export default function Shop() {
  return (
    <div>
      <ShopFilter />
      <ShopSorter />
      <ShopPagination currentPage={1} totalPages={231} onPageChange={() => {}} />
    </div>
  );
}
