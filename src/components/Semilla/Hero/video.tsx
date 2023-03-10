import { useState } from 'react';

interface link {
  video: string;
}

export default function Video({ video }: link) {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div className=' mx-auto w-4/5   overflow-hidden lg:mb-20'>
      <div
        onClick={() => setPlayVideo(!playVideo)}
        className='aspect-w-16 aspect-h-9 relative cursor-pointer  '
      >
        <iframe
          className='lg:ml-4'
          width='560'
          height='315'
          src={video}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
