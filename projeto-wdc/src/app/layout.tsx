import "./globals.css";
import { Poppins, Nunito_Sans, Oswald } from 'next/font/google';

// Configuração das Google Fonts
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const nunitoSans = Nunito_Sans({
  weight: ['300', '400', '600', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
});

const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
});

export const metadata = {
  title: {
    default: "Pompo Olimpíadas - Superaula Online Gratuita",
    template: "%s | Pompo Olimpíadas"
  },
  description: "Entrando no ritmo das Olimpíadas, realize uma superaula on-line e gratuita, onde ensinamos todos os exercícios do curso de Ginástica Íntima para todas as mulheres que se preocupam em desenvolver a própria intimidade.",
  keywords: [
    "ginástica íntima",
    "pompo",
    "olimpíadas",
    "superaula",
    "online",
    "gratuito",
    "mulheres",
    "intimidade",
    "saúde feminina",
    "exercícios íntimos",
    "bem-estar",
    "autoestima",
    "13 de agosto",
    "20h",
    "Brasília"
  ],
  authors: [{ name: "Pompo Olimpíadas", url: "https://pompo-olimpiadas.vercel.app" }],
  creator: "Pompo Olimpíadas",
  publisher: "Pompo Olimpíadas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pompo-olimpiadas.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://pompo-olimpiadas.vercel.app',
    title: 'Pompo Olimpíadas - Superaula Online Gratuita',
    description: 'Superaula on-line e gratuita de Ginástica Íntima - 13 de agosto às 20h',
    siteName: 'Pompo Olimpíadas',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pompo Olimpíadas - Superaula Online Gratuita',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pompo Olimpíadas - Superaula Online Gratuita',
    description: 'Superaula on-line e gratuita de Ginástica Íntima - 13 de agosto às 20h',
    images: ['/images/twitter-image.jpg'],
    creator: '@pompo_olimpiadas',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'health',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${nunitoSans.variable} ${oswald.variable}`}>
      <head>
        {/* Preload de recursos críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        
        {/* Meta tags de performance */}
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="color-scheme" content="dark" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/images/apple-touch-icon-167x167.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/images/favicon-32x32.png" sizes="32x32" type="image/png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Pompo Olimpíadas - Superaula Online Gratuita",
              "description": "Superaula on-line e gratuita de Ginástica Íntima para mulheres",
              "startDate": "2024-08-13T20:00:00-03:00",
              "endDate": "2024-08-13T21:30:00-03:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "location": {
                "@type": "VirtualLocation",
                "url": "https://pompo-olimpiadas.vercel.app"
              },
              "organizer": {
                "@type": "Organization",
                "name": "Pompo Olimpíadas",
                "url": "https://pompo-olimpiadas.vercel.app"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "BRL",
                "availability": "https://schema.org/InStock"
              },
              "audience": {
                "@type": "Audience",
                "audienceType": "Mulheres interessadas em ginástica íntima"
              }
            })
          }}
        />
      </head>
      <body className={`${poppins.className} ${nunitoSans.className} ${oswald.className}`}>
        {children}
      </body>
    </html>
  );
}
