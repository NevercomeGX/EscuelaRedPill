import dynamic from 'next/dynamic';

import { benefitTwo } from '../components/Infoproducto/data';
import { benefitOne } from '../components/Infoproducto/data';
import Hero from '../components/Infoproducto/hero';
import Navbar from '../components/Infoproducto/navbar';
import SectionTitle from '../components/Infoproducto/sectionTitle';

const Video = dynamic(() => import('../components/Infoproducto/video'));

const Benefits = dynamic(() => import('../components/Infoproducto/benefits'));
const Footer = dynamic(() => import('../components/Infoproducto/footer'));
const Testimonials = dynamic(
  () => import('../components/Infoproducto/testimonials')
);
const Cta = dynamic(() => import('../components/Infoproducto/cta'));
const Faq = dynamic(() => import('../components/Infoproducto/faq'));
import Seo from '@/components/Global/Seo';
const PopupWidget = dynamic(
  () => import('../components/Infoproducto/popupWidget')
);

interface sectiontittle {
  children: string;
  pretitle: string;
  title: string;
  align?: string;
}

export default function Home() {
  return (
    <>
      <Seo templateTitle='InfoProducto' />

      <Navbar />
      <Hero />
      <Video />
      <SectionTitle
        pretitle='Nextly Benefits'
        title=' Why should you use this landing page'
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos='right' data={benefitTwo} />
      <SectionTitle
        pretitle='Watch a video'
        title='Learn how to fullfil your needs'
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>

      <SectionTitle
        pretitle='Testimonials'
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle='FAQ' title='Frequently Asked Questions'>
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
