export default function PersonSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mike Tedla",
    url: "https://miketedla.com",
    image: "https://miketedla.com/og-image.png",
    jobTitle: "DJ & Eventpartner",
    description:
      "DJ i Stockholm för företag, restauranger, nattklubbar och privata event.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stockholm",
      addressCountry: "SE",
    },
    sameAs: [
      "https://instagram.com/micketedla",
      "https://soundcloud.com/miketedla",
      "https://www.linkedin.com/in/michael-tedla-1ab581393",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}