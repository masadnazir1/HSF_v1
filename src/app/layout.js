import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./Footer/Footer";
import Header from "./Header/NavBar";
import "./globals.css";
import Script from "next/script";
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
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "rlh0wj00hn");
            `,
          }}
        />
        <Header />
        <div>{children}</div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
