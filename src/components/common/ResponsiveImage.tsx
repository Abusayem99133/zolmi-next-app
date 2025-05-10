import React from 'react';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  sizes?: string;
  srcSet?: string;
  caption?: string;
  license?: string;
  creator?: string;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
}

export default function ResponsiveImage({
  src,
  alt,
  sizes,
  srcSet,
  caption,
  license,
  creator,
  loading = 'lazy',
  fetchpriority = 'auto',
  ...props
}: ResponsiveImageProps) {
  // Generate schema markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": src,
    "description": alt,
    "representativeOfPage": true,
    ...(caption && { "caption": caption }),
    ...(license && { "license": license }),
    ...(creator && { 
      "creator": {
        "@type": "Person",
        "name": creator
      }
    })
  };

  // Generate srcSet if not provided
  const defaultSrcSet = !srcSet && src ? generateSrcSet(src) : srcSet;
  
  // Generate sizes if not provided
  const defaultSizes = !sizes ? "(max-width: 768px) 100vw, 50vw" : sizes;

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <img 
        src={src} 
        alt={alt}
        sizes={defaultSizes}
        srcSet={defaultSrcSet}
        loading={loading}
        fetchpriority={fetchpriority}
        decoding="async"
        {...props}
      />
    </>
  );
}

function generateSrcSet(src: string): string {
  // Parse URL to get base and extension
  const urlParts = src.split('?')[0];
  const baseUrl = urlParts.substring(0, urlParts.lastIndexOf('.'));
  const ext = urlParts.substring(urlParts.lastIndexOf('.'));

  // Generate srcSet for common viewport widths
  const widths = [320, 640, 768, 1024, 1280, 1536, 1920];
  return widths
    .map(w => `${baseUrl}?w=${w}&auto=format&fit=crop ${w}w`)
    .join(', ');
}