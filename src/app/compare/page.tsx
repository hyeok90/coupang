'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function ComparePage() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleSelectProduct = (id: number) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        if (prev.length < 3) {
          return [...prev, id];
        }
        return prev; // 3개 이상 선택 방지
      }
    });
  };

  const selectedProducts = products.filter(p => selectedIds.includes(p.id));

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">명품 아이템 비교</h1>
        <p className="text-gray-600 mt-2">비교하고 싶은 상품을 최대 3개까지 선택해주세요.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">상품 선택</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <label key={product.id} className="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedIds.includes(product.id)}
                onChange={() => handleSelectProduct(product.id)}
                disabled={selectedIds.length >= 3 && !selectedIds.includes(product.id)}
                className="mr-3 h-5 w-5 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <span className="font-medium">{product.name}</span>
            </label>
          ))}
        </div>
      </div>

      {selectedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">비교 결과</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
