'use client';

export default function internalLoader({
  src,
  width,
  quality
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return `${src}?w=${width}&q=${quality || 75}`;
}
