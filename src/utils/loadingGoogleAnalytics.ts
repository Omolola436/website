// src/utils/loadGoogleAnalytics.ts

// Extend the Window interface
declare global {
    interface Window {
      dataLayer: any[];
      gtag: (...args: any[]) => void;
    }
  }
  
  export const loadGoogleAnalytics = (consentDetails?: {
    preferences: boolean;
    statistics: boolean;
    marketing: boolean;
  }) => {
    if (typeof window === 'undefined') return;
  
    const GA_MEASUREMENT_ID = 'G-1PSC11JZX5'; // Replace with your actual ID
    if (document.getElementById('ga-script')) return;
  
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function (...args: any[]) {
        window.dataLayer.push(args);
      };
  
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID);
  
      // Log consent event if provided
      if (consentDetails) {
        window.gtag('event', 'cookie_consent', {
          event_category: 'consent',
          event_label: 'accepted_statistics',
          preferences: consentDetails.preferences,
          statistics: consentDetails.statistics,
          marketing: consentDetails.marketing,
        });
      }
    };
  };
  
  export default loadGoogleAnalytics;  