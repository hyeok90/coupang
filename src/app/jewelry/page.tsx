import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function JewelryPage() {
  const jewelryProducts = products.filter(p => p.category === '쥬얼리');

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-12 text-center">
          <span className="block xl:inline">쥬얼리 컬렉션</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jewelryProducts.length > 0 ? (
            jewelryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">해당 카테고리의 상품이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}
