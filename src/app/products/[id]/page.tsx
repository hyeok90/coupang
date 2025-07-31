import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Temporarily commenting out generateStaticParams to isolate the build error.
// export async function generateStaticParams() {
//   return products.map((product) => ({
//     id: product.id.toString(),
//   }));
// }

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 font-sans pt-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="relative w-full h-96 md:w-96">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-l-lg"
                priority
              />
            </div>
          </div>
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {product.category}
              </div>
              <h1 className="mt-2 text-4xl leading-tight font-extrabold text-gray-900">
                {product.name}
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                {product.description}
              </p>
              <div className="mt-6">
                <span className="text-3xl font-bold text-gray-900">
                  {product.price.toLocaleString()}원
                </span>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                href={product.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-center w-full"
              >
                  구매하러 가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
