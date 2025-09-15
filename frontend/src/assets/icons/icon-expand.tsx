import React from 'react';

interface ExpandProps {
  class?: string;
}

const IconExpand: React.FC<ExpandProps> = (props) => {
  return (
  <svg viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.class}>
    <path d="M4.375 12.1667V4.875H11.6667M23.3333 4.875H30.625V12.1667M30.625 23.8333V31.125H23.3333M11.6667 31.125H4.375V23.8333" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  );
};

export default IconExpand;