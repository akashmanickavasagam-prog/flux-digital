import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flux Digital | Digital Marketing Agency in Bangalore",
  description:
    "Flux Digital is Bangalore's leading digital marketing agency offering SEO, Google Ads, Web Design, Social Media Marketing and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
