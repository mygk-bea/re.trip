import React from 'react';

interface ArrowChevronProps {
  class?: string;
}

const IconArrowChevron: React.FC<ArrowChevronProps> = (props) => {
  return (
  <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.class}>
    <path d="M8.75 13.125L17.5 21.875L26.25 13.125" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  );
};

export default IconArrowChevron;