import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/sonner';
import Footer from '@/components/Footer';
import { GeistSans } from 'geist/font/sans';
import { siteConfig } from '@/config/siteConfig';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './(css)/alert.css';
import Header from '@/components/Header';
import Timer from '@/components/Timer';
import { Button } from '@headlessui/react';
import Link from 'next/link';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
    'Software Engineer',
    'NextJS Web Developer',
    'ReactJS Developer',
    'Expert NextJS Developer',
    'Expert ReactJS Developer',
  ],
  authors: [
    {
      name: 'aymane chaaba',
      url: 'https://github.com/aymanechaaba1',
    },
  ],
  creator: 'aymane chaaba',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: '@aymanedev',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  metadataBase: new URL('https://aymanechaaba.vercel.app'),
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
          'min-h-screen font-sans antialiased flex flex-col',
          GeistSans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <div className="w-full backdrop-blur sticky bg-gray-200/30 dark:bg-gray-800/30 flex items-center px-4 justify-center gap-x-5">
            <div className="my-2 w-1/2">
              <h4 className="font-semibold text-md">5 Day SaaS CHALLENGE</h4>
              <Link href={`/challenge`}>
                <Button
                  type="button"
                  className="inline-flex w-full items-center gap-2 rounded-md bg-emerald-700 text-center justify-center uppercase py-1.5 px-3 font-bold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-emerald-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  Learn More
                </Button>
              </Link>
            </div>
            <Timer pSize={1} textSize="md" />
          </div> */}
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
