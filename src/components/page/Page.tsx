import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import { useEffect } from 'react';

interface PageProps {
  children: React.ReactNode;
  title: string;
}

const Page: React.FC<PageProps> = ({ children, title }) => {
  useEffect(() => {
    document.title = `CryptoMarketPalace - ${title}`;
  }, [title]);

  return (
    <div className="page flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export { Page };
