import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from './common/Header/Header';
import { Footer } from './common/Footer/Footer';
import { CartProvider } from './components/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Code Sneakers',
  description: 'Loja virtual de tênis.',
  icons: {
    icon: { url: '/icon.svg', type: 'image/svg' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
