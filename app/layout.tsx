import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import ReactIcon from '@/components/icons/ReactIcon';
import { Toaster } from '@/components/ui/sonner';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
export const metadata: Metadata = {
  title: 'Aymane Chaaba',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex flex-col p-4',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 lg:max-w-6xl lg:mx-auto">{children}</main>
          <Toaster />
          <ReactIcon />
        </ThemeProvider>
      </body>
    </html>
  );
}
