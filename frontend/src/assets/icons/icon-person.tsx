import React from 'react';

interface PersonProps {
  class?: string;
}

const IconPerson: React.FC<PersonProps> = (props) => {
  return (
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.class}>
      <path d="m20 20-5-2-2-5 2-4c2-2 3-2 5-2s3 0 5 2l2 4-2 5-5 2ZM7 30v-4l2-2a25 25 0 0 1 11-2 23 23 0 0 1 11 2l2 2v4l-1 2-2 1H10l-2-1-1-2Zm3 0h20v-2l-1-1a22 22 0 0 0-9-2 19 19 0 0 0-9 2 2 2 0 0 0-1 2v1Zm10-13 2-1 1-3-1-2-2-1-2 1-1 2 1 3 2 1Z"/>
    </svg>
  );
};

export default IconPerson;