import { ReactNode } from 'react';

import Header from '../components/Header/Header';

import styles from './layout.module.css';

export const metadata = {
  title: {
    default: 'Rådman Fastighetsservice',
    template: '%s | Rådman Fastighetsservice',
  },
  description: 'Fastighetsservice i Dalarna',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="sv">
      <body className={styles.body}>
        <header>
          <Header />
        </header>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          &copy; {new Date().getFullYear()} Rådman Fastighetsservice.
        </footer>
      </body>
    </html>
  );
}