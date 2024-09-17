import localFont from "next/font/local";
import { Montserrat } from "next/font/google"
import "./globals.css";
import NavBar from "@/components/navbar"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({
  subsets: ["latin" ]
});

export const metadata = {
  title: "Demo Studio - Website Design",
  description: "First next js project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${montserrat.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
