import React, { useState } from 'react';

interface ReadMoreReadLessProps {
  limit: number;
  children?: React.ReactNode;
}

const ReadMoreReadLess = ({ limit, children }: ReadMoreReadLessProps) => {
  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const toggleBtn = () => {
    setReadMoreShown((prevState) => !prevState);
  };

  let content = null;

  if (children) {
    const truncatedContent = isReadMoreShown
      ? children
      : `${children}`.substr(0, limit);
    content = (
      <p className='py-2 leading-normal text-white dark:text-gray-300 lg:text-xl xl:text-xl'>
        {truncatedContent}
      </p>
    );
  }

  return (
    <div>
      {content}
      {children && (
        <button className='text-white underline' onClick={toggleBtn}>
          {isReadMoreShown ? 'Read Less' : '...Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMoreReadLess;
