import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO: React.FC = () => {
  const location = useLocation();

  const getPageData = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'FIVE-0 Auto Detail | Mobile Detailing Oklahoma | We Come To You',
          description:
            'FIVE-0 Auto Detail delivers premium mobile detailing across Oklahoma. Interior, exterior, stain extraction, and full vehicle resets brought directly to you.',
          keywords:
            'mobile detailing Oklahoma, car detailing Lawton OK, auto detailing, interior detail, exterior detail, stain extraction, mobile car wash'
        };
      case '/services':
        return {
          title: 'Detailing Packages & Booking | FIVE-0 Auto Detail',
          description:
            'Choose from Patrol, Task Force, Interceptor, and SWAT packages. Mobile detailing with water and power included. Book your vehicle reset today.',
          keywords:
            'car detailing packages Oklahoma, mobile detailing booking, truck detailing, sedan detailing, premium car detail'
        };
      case '/results':
        return {
          title: 'Before & After Results | FIVE-0 Auto Detail',
          description:
            'See real before and after transformations from our mobile detailing services. Interior resets, exterior cleaning, and full vehicle recoveries.',
          keywords:
            'car detailing before after, mobile detailing results, interior cleaning results, exterior detail results'
        };
      default:
        return {
          title: 'FIVE-0 Auto Detail | Mobile Detailing Oklahoma',
          description:
            'Professional mobile car detailing services brought directly to you.',
          keywords:
            'mobile detailing, auto detailing, car cleaning'
        };
    }
  };

  const { title, description, keywords } = getPageData();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="FIVE-0 Auto Detail" />
      <meta property="og:url" content={`https://five0detail.com${location.pathname}`} />
      <meta property="og:image" content="https://five0detail.com/og-image.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://five0detail.com/og-image.jpg" />

      {/* Structured Data */}
      {location.pathname === '/' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "FIVE-0 Auto Detail",
            "description": "Premium mobile car detailing and vehicle reset services",
            "url": "https://five0detail.com",
            "telephone": "(915) 318-5633",
            "areaServed": {
              "@type": "Place",
              "name": "Lawton, Oklahoma and surrounding 60 mile radius"
            },
            "serviceType": [
              "Mobile Car Detailing",
              "Interior Detailing",
              "Exterior Detailing",
              "Stain Extraction"
            ],
            "openingHours": "Mo,Tu,We,Th,Fr,Sa 07:00-19:00"
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;