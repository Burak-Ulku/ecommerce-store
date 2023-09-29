import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home Page | COol Toy Store',
    template: '%s | COol Toy Store',
  },
  description: 'Generated by create next app',
};
// Bu "children" applicationdaki hersey demek. Bütün dosyalar, bütün routlar vs.... ( layoutlarin genel durumu böyle)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <nav>
            {/* normalde bu parantezlerde "a" kullaniyoruz. nexjs de böyle bir özellik var, yukaridaki import next/linkden , a yerine link yaziyoruz. böylelikle , sayfa load ederken daha hizli calisiyor */}
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
          </nav>
        </div>

        {children}
      </body>
    </html>
  );
}
