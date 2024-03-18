import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import React from 'react';

interface PageProps {
  children: React.ReactNode;
  title: string;
}

const Page: React.FC<PageProps> = ({ children, title }) => {
  React.useEffect(() => {
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
