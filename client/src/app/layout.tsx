import type { Metadata } from "next";
import "./globals.scss";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Providers from "./api/auth/Providers";

export const metadata: Metadata = {
  title: "Sip Savvy",
  description:
    "A Website built for users to explore narratives, knowledge, and insights from connoisseurs on all things wine.",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main>
            {children}
            {modal}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
