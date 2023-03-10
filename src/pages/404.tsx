import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/Global/layout/Layout';
import ArrowLink from '@/components/Global/links/ArrowLink';
import Seo from '@/components/Global/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='ups... 404' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>404</h1>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              Devuelta a Casa haha
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
