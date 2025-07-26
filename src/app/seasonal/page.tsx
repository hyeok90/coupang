import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const seasonalCollection = {
  title: 'Summer Vibe Collection',
  description: '뜨거운 태양 아래 당신의 스타일을 더욱 빛내줄 여름 시즌 필수 아이템을 만나보세요.',
  productIds: [1, 7, 10], // Example: Diptyque Perfume, Tiffany & Co. Necklace, Rolex Watch
};

export default function SeasonalPage() {
  const curatedProducts = products.filter(p => seasonalCollection.productIds.includes(p.id));

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">{seasonalCollection.title}</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{seasonalCollection.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {curatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
