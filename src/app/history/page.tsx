import React from 'react';
import Image from 'next/image';

export default function HistoryPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight text-center mb-6">
            샤넬 No.5: 시대를 초월한 향수의 아이콘
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">향수 그 이상의 의미를 지닌, 하나의 문화적 현상</p>

          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl mb-12">
            <Image 
              src="/images/chanel-no5-history.jpg" 
              alt="Chanel No.5 bottle with a historical background"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              1921년, 가브리엘 &apos;코코&apos; 샤넬은 &apos;여성의 향기가 나는 여성용 향수&apos;를 만들고자 했습니다. 당시 유행하던 단일 플로럴 향에서 벗어나, 그녀는 조향사 에르네스트 보에게 혁신적인 향을 주문했습니다. 그는 80가지가 넘는 성분을 조합하여 전에 없던 복합적이고 추상적인 향을 창조해냈습니다.
            </p>
            <p>
              샤넬은 보가 제시한 10개의 샘플 중 5번째 샘플을 선택했고, 숫자 &apos;5&apos;를 행운의 숫자로 여겼기에 &apos;No.5&apos;라는 이름을 붙였습니다. 이는 향수 업계에 큰 파장을 일으켰습니다. 화려한 이름 대신 단순한 숫자를 사용한 것은 그 자체로 혁명이었으며, 미니멀리즘을 추구하는 샤넬의 디자인 철학과도 일치했습니다.
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-800 my-8">
              &quot;A woman who doesn&apos;t wear perfume has no future.&quot;
              <cite className="block text-right not-italic mt-2">- Coco Chanel</cite>
            </blockquote>
            <p>
              마릴린 먼로가 잠옷 대신 &apos;샤넬 No.5 몇 방울&apos;을 입는다고 말했을 때, 이 향수는 전설이 되었습니다. 앤디 워홀의 팝아트 작품에도 등장하며, 샤넬 No.5는 단순한 향수를 넘어 20세기 여성 해방과 현대성을 상징하는 아이콘으로 자리매김했습니다.
            </p>
            <p>
              오늘날까지도 샤넬 No.5는 전 세계적으로 가장 사랑받는 향수 중 하나로 남아있습니다. 그 독창적인 향과 시대를 초월하는 우아함은 앞으로도 계속해서 새로운 세대에게 영감을 줄 것입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
