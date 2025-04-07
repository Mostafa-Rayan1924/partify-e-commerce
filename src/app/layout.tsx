import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../app/globals.css";
import Header from "@/_components/Navigation/Header";
import { ThemeProvider } from "@/_components/Navigation/ThemeProvider";
import Footer from "@/_components/sharable/Footer";
import ReduxProvider from "@/store/ReduxProvider";
import { Toaster } from "react-hot-toast";
import Ai from "@/_components/sharable/Ai";

export const metadata: Metadata = {
  title: "MG Company",
  description: "MG Company For Construction And Marine Works",
  icons: [
    {
      url: "https://res.cloudinary.com/dlaeaq6is/image/upload/v1743844729/logo-removebg-preview_scqxqj.png",
      href: "https://res.cloudinary.com/dlaeaq6is/image/upload/v1743844729/logo-removebg-preview_scqxqj.png",
      sizes: "192x192",
      type: "image/png",
      rel: "icon",
    },
  ],
};
const font = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} overflow-x-hidden antialiased`}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-center" reverseOrder={false} />
            <Ai />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
