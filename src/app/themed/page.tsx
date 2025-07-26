import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const themedCollection = {
  title: '워라밸 컬렉션',
  description: '바쁜 일상 속, 당신의 삶에 균형과 특별함을 더해줄 아이템을 소개합니다.',
  productIds: [4, 11, 14], // Example: Aesop Hand Cream, Cartier Watch, SK-II Essence
};

export default function ThemedPage() {
  const curatedProducts = products.filter(p => themedCollection.productIds.includes(p.id));

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">{themedCollection.title}</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{themedCollection.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {curatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
