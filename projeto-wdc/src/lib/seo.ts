export const seoConfig = {
  siteName: 'Pompo Olimpíadas',
  siteUrl: 'https://pompo-olimpiadas.vercel.app',
  defaultTitle: 'Pompo Olimpíadas - Superaula Online Gratuita',
  defaultDescription: 'Entrando no ritmo das Olimpíadas, realize uma superaula on-line e gratuita, onde ensinamos todos os exercícios do curso de Ginástica Íntima para todas as mulheres que se preocupam em desenvolver a própria intimidade.',
  keywords: [
    'ginástica íntima',
    'pompo',
    'olimpíadas',
    'superaula',
    'online',
    'gratuito',
    'mulheres',
    'intimidade',
    'saúde feminina',
    'exercícios íntimos',
    'bem-estar',
    'autoestima',
    '13 de agosto',
    '20h',
    'Brasília'
  ],
  author: {
    name: 'Pompo Olimpíadas',
    url: 'https://pompo-olimpiadas.vercel.app'
  },
  social: {
    twitter: '@pompo_olimpiadas',
    facebook: 'pompo.olimpiadas',
    instagram: '@pompo_olimpiadas'
  },
  event: {
    name: 'Pompo Olimpíadas - Superaula Online Gratuita',
    startDate: '2024-08-13T20:00:00-03:00',
    endDate: '2024-08-13T21:30:00-03:00',
    price: '0',
    currency: 'BRL',
    location: 'Online'
  },
  images: {
    og: '/images/og-image.jpg',
    twitter: '/images/twitter-image.jpg',
    favicon: '/favicon.ico',
    appleTouch: '/images/apple-touch-icon.png'
  }
}

export function generateMetadata(pageTitle?: string, pageDescription?: string) {
  const title = pageTitle ? `${pageTitle} | ${seoConfig.siteName}` : seoConfig.defaultTitle
  const description = pageDescription || seoConfig.defaultDescription

  return {
    title,
    description,
    keywords: seoConfig.keywords,
    authors: [seoConfig.author],
    creator: seoConfig.author.name,
    publisher: seoConfig.author.name,
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: '/',
      languages: {
        'pt-BR': '/',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: seoConfig.siteUrl,
      title,
      description,
      siteName: seoConfig.siteName,
      images: [
        {
          url: seoConfig.images.og,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [seoConfig.images.twitter],
      creator: seoConfig.social.twitter,
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
  }
}
