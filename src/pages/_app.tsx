import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
// import Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;
export default function App({ Component, pageProps }: AppProps) {
  const className = getPageClassName(Component);
  return <Component {...pageProps} className={className} />;
}

function getPageClassName(Component: { name: string }) {
  switch (Component.name) {
    case 'Linktree':
      return 'bg-[#212121]';
    case 'Consulting':
      return 'bg-white';
    case 'ContactPage':
      return 'bg-green-100';
    default:
      return 'bg-black';
  }
}
