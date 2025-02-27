import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
export const metadata: Metadata = {
  title: "NYSC - Navigator",
  description:
    "Get directions from your NYSC camp to your secretariat with ease! Simply enter your camp location and secretariat address, and our website will provide you with the most convenient route. Plan your journey, save time, and arrive at your secretariat stress-free! Visit NYSC Navigator today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        {children}
        <Footer />
      </body>
    </html>
  );
}
