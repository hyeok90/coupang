import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});



export const metadata: Metadata = {
  title: '명추 - 럭셔리 선물 셀렉션',
  description: '고품격 라이프스타일을 위한 명품 아이템 정보 및 구매 가이드',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen bg-gray-50 text-gray-800`}
      >
        <Header />
        <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
