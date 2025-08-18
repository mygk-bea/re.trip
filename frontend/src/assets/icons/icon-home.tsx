import React from 'react';

interface HomeProps {
  class?: string;
}

const IconHome: React.FC<HomeProps> = (props) => {
  return (
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.class}>
      <path d="M10 32h5V22h10v10h5V17L20 9l-10 8v15Zm-3 0V17a3 3 0 0 1 1-3l10-8h4l10 8 1 1v17l-1 2-2 1h-8V25h-4v10h-8l-2-1-1-2Z"/>
    </svg>
  );
};

export default IconHome;