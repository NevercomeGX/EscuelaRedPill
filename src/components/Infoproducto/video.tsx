import Container from './container';

export default function Video() {
  return (
    <Container className=' px-6 pb-16 lg:mx-[38rem]  '>
      <div
        // onClick={() => setPlayVideo(!playVideo)}
        className='aspect-w-16 aspect-h-9 relative cursor-pointer bg-gray-300 bg-gradient-to-tr from-gray-400 to-gray-700 '
      >
        {/* {!playVideo && (
          <button className='absolute inset-auto top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform text-white lg:h-28 lg:w-28'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-16 w-16  lg:h-28 lg:w-28'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                clipRule='evenodd'
              />
            </svg>
            <span className='sr-only'>Play Video</span>
          </button>
        )}
        {playVideo && ( */}
        <iframe
          src='https://www.youtube.com/embed/LHf2KqT3g4U'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
        {/* )} */}
      </div>
    </Container>
  );
}

// import { useState } from 'react';

// import Container from './container';

// export default function Video() {
//   const [playVideo, setPlayVideo] = useState(false);
//   return (
//     <Container className=' '>
//       <div className=' mx-auto w-full max-w-4xl overflow-hidden rounded-2xl px-10 lg:mb-20  '>
//         <div
//           onClick={() => setPlayVideo(!playVideo)}
//           className='aspect-w-16 aspect-h-9 relative cursor-pointer bg-indigo-300 bg-gradient-to-tr from-purple-400 to-indigo-700 '
//         >
//           {!playVideo && (
//             <button className='absolute inset-auto top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform text-white lg:h-28 lg:w-28'>
//               <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 className='h-16 w-16  lg:h-28 lg:w-28'
//                 viewBox='0 0 20 20'
//                 fill='currentColor'
//               >
//                 <path
//                   fillRule='evenodd'
//                   d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
//                   clipRule='evenodd'
//                 />
//               </svg>
//               <span className='sr-only'>Play Video</span>
//             </button>
//           )}
//           {playVideo && (
//             <iframe
//               src='https://www.youtube.com/embed/LHf2KqT3g4U'
//               title='YouTube video player'
//               allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//               allowFullScreen
//             ></iframe>
//           )}
//         </div>
//       </div>
//     </Container>
//   );
// }
