// import './globals.css';
// import type { Metadata } from 'next';
// import localFont from 'next/font/local'
// import Header from '@/components/layout/header';
// import Footer from '@/components/layout/footer';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'GloboPersona - Innovative Technology Solutions',
//   description: 'Empowering businesses through innovative technology solutions and digital transformation.',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Header />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'GloboPersona - Innovative Technology Solutions',
  description: 'Empowering businesses through innovative technology solutions and digital transformation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans antialiased">
      <body className="font-['Inter',system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,sans-serif]">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
