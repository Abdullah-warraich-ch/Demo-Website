import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { ToastProvider } from "../context/ToastContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "GiftAura | Premium Curated Gifts in Pakistan",
  description: "Discover handcrafted premium gifts for every occasion. Beautifully wrapped and delivered across Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <CartProvider>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Navbar />
              <main style={{ flex: 1 }}>
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
