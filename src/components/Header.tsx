import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white text-gray-800 p-4 border-b sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link href="/">명추</Link>
        </h1>
        <nav>
          <Link href="/perfume" className="mr-4 hover:underline">향수</Link>
          <Link href="/hand-cream" className="mr-4 hover:underline">핸드크림</Link>
          <Link href="/jewelry" className="mr-4 hover:underline">쥬얼리</Link>
          <Link href="/watch" className="mr-4 hover:underline">시계</Link>
          <Link href="/cosmetics" className="hover:underline">화장품</Link>
        </nav>
      </div>
    </header>
  );
}
