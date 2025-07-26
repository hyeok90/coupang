import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white h-full flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="mt-1 text-lg font-semibold text-gray-900 truncate">{product.name}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2 flex-grow">{product.description}</p>
        <div className="mt-4 text-right">
            <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                자세히 보기 &rarr;
            </span>
        </div>
      </div>
    </Link>
  );
}
