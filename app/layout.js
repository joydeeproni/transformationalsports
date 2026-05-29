import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import SplashScreen from '@/components/SplashScreen';

const klima = localFont({
  src: [
    {
      path: './fonts/klima-light-web.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/klima-regular-web.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/klima-medium-web.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/klima-bold-web.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-klima',
  display: 'swap',
});

export const metadata = {
  title: 'Transformational Sports',
  description:
    'Transformational Sports by Liz Haynes — empowering athletes and individuals through transformative coaching, mindset training, and holistic sports development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={klima.variable}>
      <body className={klima.className}>
        <SplashScreen />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
