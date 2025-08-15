import React from 'react';

const BookingSection = () => {
  return (
    <section 
      id="booking" 
      style={{ padding: '4rem 1rem' }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <h2 style={{ 
          color: '#fff', 
          margin: '0 0 1rem',
          fontSize: '2.5rem',
          fontWeight: '900',
          textAlign: 'center',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9)'
        }}>
          Schedule Your 30-Minute AI Audit
        </h2>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/selenica3/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=010000&text_color=b80101&primary_color=c60303"
          style={{ 
            minWidth: '320px', 
            height: '700px', 
            border: '0', 
            borderRadius: '12px', 
            background: 'rgba(0,0,0,0.2)' 
          }}
        ></div>
        <noscript>
          <p>
            <a 
              href="https://calendly.com/selenica3/30min" 
              target="_blank" 
              rel="noopener"
              style={{ color: '#E41E26', textDecoration: 'underline' }}
            >
              Open in Calendly
            </a>
          </p>
        </noscript>
      </div>
    </section>
  );
};

export default BookingSection;