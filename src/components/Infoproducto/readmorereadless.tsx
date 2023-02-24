import React, { useState } from 'react';

interface ReadMoreReadLessProps {
  limit: number;
  children?: string[];
}

const ReadMoreReadLess = ({ limit, children }: ReadMoreReadLessProps) => {
  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const toggleBtn = () => {
    setReadMoreShown((prevState) => !prevState);
  };

  let content = null;

  if (children && children.length > 0) {
    const truncatedContent = isReadMoreShown
      ? children
      : children.slice(0, limit);
    content = truncatedContent.map((paragraph, index) => (
      <p
        key={index}
        className='py-2 leading-normal text-white dark:text-gray-300 lg:text-xl xl:text-xl'
      >
        {paragraph}
      </p>
    ));
  }

  return (
    <div>
      {content}
      {children && children.length > limit && (
        <button className='text-blue-600 underline' onClick={toggleBtn}>
          {isReadMoreShown ? 'Leer menos' : '...Leer más'}
        </button>
      )}
    </div>
  );
};

export default ReadMoreReadLess;
