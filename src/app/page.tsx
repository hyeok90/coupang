import CategoryCard from '@/components/CategoryCard';

const categories = [
  {
    name: '향수',
    href: '/perfume',
    imageSrc: 'https://images.unsplash.com/photo-1585399136110-bf5a74d39814?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: '핸드크림',
    href: '/hand-cream',
    imageSrc: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: '쥬얼리',
    href: '/jewelry',
    imageSrc: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: '시계',
    href: '/watch',
    imageSrc: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: '화장품',
    href: '/cosmetics',
    imageSrc: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop',
  },
];

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative container mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4">
            당신의 품격을 높이는 선택, 명추
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            엄선된 명품 컬렉션과 깊이 있는 가이드로 최고의 라이프스타일을 경험하세요.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">카테고리 둘러보기</h2>
            <p className="mt-4 text-lg text-gray-600">관심 있는 카테고리를 선택하여 추천 아이템을 확인해보세요.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                name={category.name}
                href={category.href}
                imageSrc={category.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
