export default function HistoryPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">히스토리 & 가치</h1>
          <p className="mt-4 text-lg text-gray-600">시간을 초월하는 브랜드의 철학과 유산을 만나보세요.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <img 
              src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop" 
              alt="Chanel No. 5"
              className="w-full h-auto rounded-lg shadow-lg object-cover mb-8"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">세기의 아이콘, 샤넬 No. 5 이야기</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                1921년, 가브리엘 '코코' 샤넬은 기존의 꽃 향기 일색이던 향수 시장에 혁명을 일으켰습니다. 그녀는 조향사 에르네스트 보에게 '여성의 향기가 나는 여성용 향수'를 만들어달라고 요청했습니다. 당시로서는 파격적으로 80가지가 넘는 성분과 인공 합성물인 알데하이드를 결합하여, 이전에는 존재하지 않았던 복합적이고 추상적인 향을 창조해냈습니다.
              </p>
              <p>
                샤넬이 10개의 샘플 중 5번째를 선택하면서 'No. 5'라는 이름이 탄생했다는 일화는 유명합니다. 단순한 숫자를 이름으로 사용한 것, 그리고 미니멀한 사각형 보틀 디자인은 시대를 앞서간 샤넬의 모더니즘 철학을 그대로 보여줍니다. 샤넬 No. 5는 단순한 향수를 넘어, 여성 해방과 현대적인 아름다움의 상징이 되었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
