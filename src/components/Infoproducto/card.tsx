import React from 'react';

interface CardProps {
  src?: string;
  nombre: string;
  testimonio: string;
}

const Card: React.FC<CardProps> = ({ src, nombre, testimonio }) => {
  return (
    <div className='flex justify-center'>
      <div className='max-w-md rounded-lg bg-white shadow-lg'>
        <iframe
          width='100%'
          height='240'
          src={src}
          className='rounded-t-md'
        ></iframe>
        <div className='p-6'>
          <h5 className='mb-2 text-xl font-medium text-gray-900'>{nombre}</h5>
          <p className='mb-4 text-base text-gray-700'>{testimonio}</p>

          <div className=''></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
