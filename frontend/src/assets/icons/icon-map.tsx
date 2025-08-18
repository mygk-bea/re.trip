import React from 'react';

interface MapProps {
  class?: string;
}

const IconMap: React.FC<MapProps> = (props) => {
  return (
    <svg width="41" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.class}>
      <path d="m19 30-3-2m0 0L6 33V12l10-5m0 21V7m0 0 10 5m0 0 10-5v12m-10-7v8m8 14 3 3m-11-7a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default IconMap;