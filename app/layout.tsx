import './globals.css';
import { Inter } from 'next/font/google';
import ThemeToggle from '@/components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Flam HR Dashboard',
  description: 'Minimal HR Dashboard assignment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-black dark:text-white`}
      >
        <div className="max-w-6xl mx-auto p-4">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">HR Dashboard</h1>
            <ThemeToggle />
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
