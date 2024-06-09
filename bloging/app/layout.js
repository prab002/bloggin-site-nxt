import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog site",
  description: "Blog Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <main>
        <body
          className={`${inter.className} px-4 py-2 mx-auto max-w-screen-xl`}
        >
          <Navbar />
          {children}
        </body>
      </main>
    </html>
  );
}
