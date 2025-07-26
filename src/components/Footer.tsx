import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 p-4 mt-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <Link href="/compare" className="mx-2 hover:underline">명품 비교</Link>
          <Link href="/seasonal" className="mx-2 hover:underline">시즌별 큐레이션</Link>
          <Link href="/themed" className="mx-2 hover:underline">테마별 큐레이션</Link>
          <Link href="/guide" className="mx-2 hover:underline">구매 가이드</Link>
          <Link href="/history" className="mx-2 hover:underline">히스토리 & 가치</Link>
        </div>
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} 명추. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-1">본 사이트는 쿠팡 파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있습니다.</p>
        </div>
      </div>
    </footer>
  );
}
