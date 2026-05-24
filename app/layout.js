import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Wonder to Build — Genuine Innovation Starts Here',
  description: 'A 501(c)(3) nonprofit equipping students with hands-on tools, engineering mindset, and creative confidence to build genuine innovations.',
  openGraph: {
    title: 'Wonder to Build',
    description: 'Hands-on engineering programs that teach students to create genuine innovations — not copy existing ones.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
