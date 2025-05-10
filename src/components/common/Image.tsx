import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string; // Make alt required
  caption?: string;
  license?: string;
  creator?: string;
}

export default function Image({ 
  src, 
  alt, 
  caption, 
  license, 
  creator,
  ...props 
}: ImageProps) {
  // Generate schema markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": src,
    "description": alt,
    ...(caption && { "caption": caption }),
    ...(license && { "license": license }),
    ...(creator && { 
      "creator": {
        "@type": "Person",
        "name": creator
      }
    })
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <img src={src} alt={alt} {...props} />
    </>
  );
}