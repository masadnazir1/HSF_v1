import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./Footer/Footer";
import Header from "./Header/NavBar";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dream Discover",
  description: "HSF  Where Dreams Lead to Discovery Across Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <div>{children}</div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
