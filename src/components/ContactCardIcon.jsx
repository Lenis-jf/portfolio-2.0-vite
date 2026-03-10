import React from 'react';

const ContactCardIcon = ({ className = '', ...props }) => {
  return (
    <svg className={`contact-card-icon ${className}`} viewBox="0 0 87 77" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="cc-bg" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-30.94 .14) rotate(42.04) scale(117.06)">
          <stop offset=".002" stopColor="#fff"/><stop offset=".65" stopColor="#0171E3"/>
        </radialGradient>
        <radialGradient id="cc-avatar" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(56.95 32.45) rotate(92.04) scale(14.05 13.15)">
          <stop offset=".27" stopColor="#fff"/><stop offset="1" stopColor="#CACACA" stopOpacity=".8"/>
        </radialGradient>
        <linearGradient id="cc-line2" x1="32.45" y1="52.95" x2="82.45" y2="61.45" gradientUnits="userSpaceOnUse">
          <stop offset=".691" stopColor="#fff"/><stop offset="1" stopColor="#CACACA" stopOpacity=".8"/>
        </linearGradient>
        <linearGradient id="cc-line3" x1="32.45" y1="56.95" x2="82.45" y2="65.45" gradientUnits="userSpaceOnUse">
          <stop offset=".691" stopColor="#fff"/><stop offset="1" stopColor="#CACACA" stopOpacity=".8"/>
        </linearGradient>
        <linearGradient id="cc-line4" x1="32.45" y1="60.95" x2="68.37" y2="65.28" gradientUnits="userSpaceOnUse">
          <stop offset=".691" stopColor="#fff"/><stop offset="1" stopColor="#CACACA" stopOpacity=".8"/>
        </linearGradient>
        <linearGradient id="cc-glass" x1="26.55" y1="11.55" x2="86.35" y2="71.35" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F4F9FF" stopOpacity=".55"/>
          <stop offset=".5" stopColor="#E2EEFF" stopOpacity=".15"/>
          <stop offset="1" stopColor="#D6E8FF" stopOpacity=".45"/>
        </linearGradient>
        <linearGradient id="cc-edge" x1="26.55" y1="11.55" x2="86.35" y2="71.35" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity="1"/>
          <stop offset=".5" stopColor="#fff" stopOpacity=".3"/>
          <stop offset="1" stopColor="#fff" stopOpacity=".8"/>
        </linearGradient>
        <clipPath id="cc-frost-clip"><rect x="26.55" y="11.55" width="59.8" height="59.8" rx="5.9"/></clipPath>
        <clipPath id="cc-avatar-clip"><rect width="24" height="26" fill="#fff" transform="translate(44.45 21.45)"/></clipPath>
        <filter id="cc-frost" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b"/>
          <feColorMatrix in="b" type="matrix" values="1.1 0 0 0 .105 0 1.1 0 0 .105 0 0 1.1 0 .168 0 0 0 1 0"/>
        </filter>
      </defs>

      <rect className="contact-bg-card" y="20.52" width="60" height="60" rx="6" fill="url(#cc-bg)"/>

      <g className="contact-frost-layer" clipPath="url(#cc-frost-clip)">
        <rect filter="url(#cc-frost)" y="20.52" width="60" height="60" rx="6" fill="url(#cc-bg)" className="contact-bg-card"/>
        <rect x="26.55" y="11.55" width="59.8" height="59.8" rx="5.9" fill="#fff" fillOpacity=".35"/>
      </g>

      <rect className="contact-glass-card" x="26.55" y="11.55" width="59.8" height="59.8" rx="5.9" fill="url(#cc-glass)" stroke="url(#cc-edge)" strokeWidth="1.5"/>

      <g clipPath="url(#cc-avatar-clip)" className="contact-person-avatar">
        <path d="M56.46 34.09c2.88 0 5.36-2.57 5.36-5.92 0-3.31-2.49-5.76-5.36-5.76s-5.36 2.5-5.36 5.79c0 3.32 2.5 5.89 5.36 5.89zm-8.41 12.4h16.82c2.1 0 2.85-.6 2.85-1.78 0-3.46-4.33-8.22-11.26-8.22-6.95 0-11.28 4.77-11.28 8.22 0 1.18.75 1.78 2.87 1.78z" fill="url(#cc-avatar)"/>
      </g>

      <line className="contact-line contact-line-1" x1="33.45" y1="51.45" x2="79.45" y2="51.45" stroke="url(#cc-line2)" strokeWidth="2" strokeLinecap="round"/>
      <line className="contact-line contact-line-2" x1="33.45" y1="55.45" x2="79.45" y2="55.45" stroke="url(#cc-line3)" strokeWidth="2" strokeLinecap="round"/>
      <line className="contact-line contact-line-3" x1="33.45" y1="59.45" x2="65.45" y2="59.45" stroke="url(#cc-line4)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

export default ContactCardIcon;
