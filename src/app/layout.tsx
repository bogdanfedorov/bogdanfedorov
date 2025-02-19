import { Geist, Geist_Mono } from "next/font/google";
import AOSProvider from "./AOSProvider";
import "./globals.css";
import Script from "next/script";
import schema from "../../schema.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ml-10 mr-10`}
        suppressHydrationWarning
      >
        <Script
          id="bogdan_fedorov_schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schema,
          }}
        />
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
