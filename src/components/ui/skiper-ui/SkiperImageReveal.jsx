import React, { useState } from 'react';

export default function SkiperImageReveal({
  src,
  alt = '',
  width,
  height,
  aspectRatio = 'aspect-[4/5]',
  className = '',
  imgClassName = '',
  children,
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 transition-all duration-300 ${className}`}
    >
      <div className={`relative overflow-hidden w-full ${aspectRatio}`}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
            isLoaded ? 'opacity-100 filter-none' : 'opacity-0 blur-sm'
          } ${imgClassName}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      {children}
    </div>
  );
}
