import { products } from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type ProductDetailPageProps = {
  params: { id: string };
};

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find(p => p.id === parseInt(params.id, 10));

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 pt-20">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
            className="w-full h-full"
            priority
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-900 mb-4">{product.price}</p>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            구매하러 가기
          </a>
        </div>
      </div>
    </div>
  );
}

// Temporarily commenting out generateStaticParams to isolate the build error.
// This function can be re-enabled after the main build issue is resolved.
// export async function generateStaticParams() {
//   return products.map(product => ({
//     id: product.id.toString(),
//   }));
// }
