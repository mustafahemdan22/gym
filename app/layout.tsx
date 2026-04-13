import type { Metadata } from 'next';
import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'GymHub Alexandria - Elevate Your Strength',
  description: 'Pro-grade fitness and training for elite athletes right here in Alexandria, Egypt.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
