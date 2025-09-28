import React from 'react';

interface PinSharpProps {
  class?: string;
}

const IconPinSharp: React.FC<PinSharpProps> = (props) => {
  return (
    <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.class}>
      <path d="M45 82.5C45 82.5 73.125 60 73.125 35.625C73.125 20.0925 60.5325 7.5 45 7.5C29.4675 7.5 16.875 20.0925 16.875 35.625C16.875 60 45 82.5 45 82.5Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M45 46.875C46.4774 46.875 47.9403 46.584 49.3052 46.0186C50.6701 45.4533 51.9103 44.6246 52.955 43.58C53.9996 42.5353 54.8283 41.2951 55.3936 39.9302C55.959 38.5653 56.25 37.1024 56.25 35.625C56.25 34.1476 55.959 32.6847 55.3936 31.3198C54.8283 29.9549 53.9996 28.7147 52.955 27.67C51.9103 26.6254 50.6701 25.7967 49.3052 25.2314C47.9403 24.666 46.4774 24.375 45 24.375C42.0163 24.375 39.1548 25.5603 37.045 27.67C34.9353 29.7798 33.75 32.6413 33.75 35.625C33.75 38.6087 34.9353 41.4702 37.045 43.58C39.1548 45.6897 42.0163 46.875 45 46.875Z" fill="#ff7022" stroke="#ff7022" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
};

export default IconPinSharp;