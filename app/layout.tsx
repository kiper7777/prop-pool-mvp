import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PropPool — Collective Prop Trading Platform',
  description: 'Transparent collective participation in prop-trading projects. Demo MVP.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
