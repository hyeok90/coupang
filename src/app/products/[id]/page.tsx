import { products } from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// The props type is simplified to the most basic form to ensure build success.
export default function ProductDetailPage({ params }: { params: { id: string } }) {
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
              <h3 className="sr-only">Description</h3>
              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <div className="mt-10 flex">
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-800 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                쿠팡에서 자세히 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return products.map(product => ({
    id: product.id.toString(),
  }));
}
