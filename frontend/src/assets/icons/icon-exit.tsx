import React from 'react';

interface IconExit {
  class?: string;
}

const IconExit: React.FC<IconExit> = (props) => {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" className={props.class} xmlns="http://www.w3.org/2000/svg">
    <path d="M21.875 12.0312V9.29688C21.875 8.57167 21.5869 7.87617 21.0741 7.36338C20.5613 6.85059 19.8658 6.5625 19.1406 6.5625H6.01562C5.29042 6.5625 4.59492 6.85059 4.08213 7.36338C3.56934 7.87617 3.28125 8.57167 3.28125 9.29688V25.7031C3.28125 26.4283 3.56934 27.1238 4.08213 27.6366C4.59492 28.1494 5.29042 28.4375 6.01562 28.4375H19.1406C19.8658 28.4375 20.5613 28.1494 21.0741 27.6366C21.5869 27.1238 21.875 26.4283 21.875 25.7031V22.9688M26.25 12.0312L31.7188 17.5M31.7188 17.5L26.25 22.9688M31.7188 17.5H13.0566" stroke="#FF7022" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default IconExit;