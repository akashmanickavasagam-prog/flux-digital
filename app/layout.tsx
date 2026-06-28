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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K6P2FMR7');`,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11480624965"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11480624965');
            `,
          }}
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K6P2FMR7"
            height="0"
            width="0"
            className="gtm-noscript"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
