import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import './global.css'
// import '../style/common.css'
// import '../style/color.css'

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//     title: 'MyBuildCompare',
//     description: 'MyBuildCompare',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
