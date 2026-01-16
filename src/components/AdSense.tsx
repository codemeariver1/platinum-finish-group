import { useEffect } from 'react';

interface AdSenseProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  responsive?: boolean;
  className?: string;
}

export default function AdSense({ slot, format = 'auto', responsive = true, className = '' }: AdSenseProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [slot]);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      ></ins>
    </div>
  );
}

// Extended window type for AdSense
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

