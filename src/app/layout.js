import './globals.css';

export const metadata = {
  title: 'Dashboard by Mansi',
  description: 'A feature-rich dashboard application',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
