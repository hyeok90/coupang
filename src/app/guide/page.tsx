const guideContent = [
  {
    title: '정품 확인 방법',
    description: '공식 판매처, 인증서, 고유 시리얼 넘버 확인은 필수입니다. 신뢰할 수 있는 판매처에서 구매하는 것이 가장 안전한 방법입니다.',
  },
  {
    title: '합리적인 구매 시기',
    description: '시즌 오프 세일, 해외 아울렛, 면세점 프로모션 기간을 활용하면 보다 합리적인 가격에 원하는 아이템을 구매할 수 있습니다.',
  },
  {
    title: '관리 및 보관 팁',
    description: '제품 소재에 맞는 전용 클리너를 사용하고, 직사광선과 습기를 피해 더스트백이나 케이스에 보관하는 것이 좋습니다.',
  },
  {
    title: '가치를 더하는 중고 거래',
    description: '사용하지 않는 명품은 전문 중고 플랫폼을 통해 판매하여 새로운 가치를 창출할 수 있습니다. 구매 영수증과 보증서를 잘 보관하세요.',
  },
];

export default function GuidePage() {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">현명한 명품 구매 가이드</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">최고의 선택을 위한 전문가의 팁과 노하우를 확인하세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {guideContent.map((item, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h2>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
