import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kids Paradise | Tadika in Johor Bahru | Early Childhood Education",
  description: "Kids Paradise Childcare Centre in Bandar Dato Onn, Johor Bahru offers a nurturing environment for early childhood education. Contact us to learn more about our bilingual (Bahasa Malaysia, English, Mandarin) curriculum and caring staff.",
  keywords: "Tadika, kindergarten, childcare, Johor Bahru, early childhood education, Bandar Dato Onn, bilingual education, Malaysia",
  openGraph: {
    title: "Kids Paradise | Tadika in Johor Bahru",
    description: "Explore Kids Paradise, a leading Tadika in Johor Bahru offering quality early childhood education in Bahasa Malaysia, English, and Mandarin.",
    type: "website",
    url: "https://kidsparadise.vercel.app",
    locale: "en_MY",
    site_name: "Kids Paradise",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SEO Metadata */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <link rel="icon" href="/logo.png" />
        {/* Structured Data */}
        <Script type="application/ld+json" id="jsonld">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Preschool",
              "name": "Kids Paradise",
              "description": "Kids Paradise Childcare Centre offers a nurturing environment for early childhood education in Johor Bahru.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No 4-01 & No 6-01, Jalan Perjiranan 4/1, Bandar Dato Onn",
                "addressLocality": "Johor Bahru",
                "addressRegion": "Johor",
                "postalCode": "81100",
                "addressCountry": "MY"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+6018-7895960",
                "contactType": "customer service",
                "areaServed": "MY",
                "availableLanguage": ["English", "Malay", "Mandarin"]
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "1.559212",
                "longitude": "103.704149"
              },
              "sameAs": [
                "https://www.instagram.com/kidsparadisejhb"
              ]
            }
          `}
        </Script>
      </head>
      <body className={`${inter.className} w-full overflow-x-hidden`}> {/* Set full width and prevent horizontal overflow */}
        {children}
      </body>
    </html>
  );
}
