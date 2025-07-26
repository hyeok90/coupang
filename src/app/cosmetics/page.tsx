import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function CosmeticsPage() {
  const cosmeticsProducts = products.filter(p => p.category === '화장품');

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">화장품 추천</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cosmeticsProducts.length > 0 ? (
          cosmeticsProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">해당 카테고리의 상품이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
