import React from 'react';
import Image from './Image';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
    license?: string;
    creator?: string;
  }>;
  className?: string;
}

export default function ImageGallery({ images, className = '' }: ImageGalleryProps) {
  // Generate schema markup for the gallery
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "about": "Image gallery",
    "image": images.map(img => ({
      "@type": "ImageObject",
      "contentUrl": img.src,
      "description": img.alt,
      ...(img.caption && { "caption": img.caption }),
      ...(img.license && { "license": img.license }),
      ...(img.creator && { 
        "creator": {
          "@type": "Person",
          "name": img.creator
        }
      })
    }))
  };

  return (
    <div className={className}>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            caption={image.caption}
            license={image.license}
            creator={image.creator}
            className="w-full h-full object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}