import React from 'react';

interface BookmarkProps {
  class?: string;
}

const IconBookmark: React.FC<BookmarkProps> = (props) => {
  return (
    <svg width="41" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.class}>
      <path d="m20 30-7 3h-3l-1-3V8l1-2 2-1h17l2 1 1 2v22l-1 3h-4l-7-3Zm0-4 9 4V8H12v22l8-4Zm0-18h-8 17-9Z"/>
    </svg>
  );
};

export default IconBookmark;