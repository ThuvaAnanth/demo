import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import backgroundImage from '../assets/heroIMG.jpg';
import blackTea from '../assets/blackTea.jpg';
import greenTea from '../assets/greenTea.jpg';
import oolongTea from '../assets/oolongTea.jpg';
import yellowTea from '../assets/yellowTea.jpg';
import categoriesBgUrl from '../assets/categoriesBgUrl.jpg';
import Overview from '../assets/Overview.jpg';
import expert from '../assets/expert.jpg';
import review from '../assets/review.jpg';
import partnership from '../assets/partnership.jpg';
import aboutus from '../assets/ABOUT_US.jpeg';

export default function About() {
  return (
    <div>
      <Navbar />

      <div className="w-[1519px] h-[700px] bg-cover" style={{ backgroundImage: `url(${aboutus})` }}>
        <p className='text-white font-bold text-center ml-10 text-8xl pt-60'>About Us</p>
      </div>

      <div className='flex mt-5 mx-6'>
        <div className="w-[800px] h-[800px]">
          <img className='' src={Overview} alt="Company Overview" />
        </div>
        <div className='p-10'>
          <h1 className='text-center font-bold text-black mb-4'>Company Overview</h1>
          <h4>
            FreshLeaf specializes in selling and managing a diverse range of premium tea varieties, focusing on Oolong, black, green, and yellow teas.
            They cater to tea enthusiasts who value quality, flavor, and ethical sourcing.
            FreshLeaf's focus on quality, variety, and ethical sourcing positions them well to attract discerning tea lovers.
            Further insights into their specific offerings, management practices, and marketing strategies would allow for a more detailed evaluation.
          </h4>
        </div>
      </div>

      <div className='flex -mt-80 mx-6'>
        <div className='p-10'>
          <h1 className='text-center font-bold text-black mb-4'>Expertise in Tea</h1>
          <h4>
            FreshLeaf appears to have the potential to offer a captivating and informative experience for tea enthusiasts,
            but could benefit from further details and specific examples to showcase its expertise.
            By implementing these suggestions, it can strengthen its online presence and establish itself as a trusted source for tea enthusiasts.
          </h4>
        </div>
        <div className="w-[800px] h-[800px]">
          <img className='' src={expert} alt="Company Overview" />
        </div>
      </div>

      <div className='flex -mt-96 mx-6'>
        <div className="w-[800px] h-[800px]">
          <img className='' src={review} alt="Company Overview" />
        </div>
        <div className=''>
          <h1 className='text-center font-bold text-black mb-4'>Customer Satisfaction</h1>
          <h4>
            A customer recently had the pleasure of browsing the FreshLeaf website and learning about their diverse selection of tea leaves, including Oolong, Black, Green, and Yellow varieties.
          </h4>
        </div>
      </div>

      <div className='flex -mt-96 mx-6'>
        <div className='pt-10'>
          <h1 className='text-center font-bold text-black mb-4'>Partnerships</h1>
          <h4>
            FreshLeaf appears to have the potential to offer a captivating and informative experience for tea enthusiasts,
            but could benefit from further details and specific examples to showcase its expertise.
            By implementing these suggestions, it can strengthen its online presence and establish itself as a trusted source for tea enthusiasts.
          </h4>
        </div>
        <div className="w-[800px] h-[800px]">
          <img className='' src={partnership} alt="Company Overview" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
