import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  href: string;
  imageSrc: string;
}

export default function CategoryCard({ name, href, imageSrc }: CategoryCardProps) {
  return (
    <Link href={href} className="group relative block bg-black rounded-xl overflow-hidden">
      <img
        alt={name}
        src={imageSrc}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />
      <div className="relative p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          Luxury
        </p>
        <p className="text-2xl font-bold text-white">{name}</p>
        <div className="mt-16">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
              {name} 컬렉션 보러가기
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
