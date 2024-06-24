import React from 'react';
import Image from 'next/image'; 
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import FeaturedSection from "@/components/FeaturedSection";
import Testimonial from "@/components/Testimonial";



export default function Home() {
  return (
    <>
      <div className="flex items-center mt-4" style={{ height: '400px' }}>
        <div className="w-1/2 p-4 text-white ml-8">
          <h1 className="font-cardo text-4xl font-bold leading-tight" style={{ fontSize: '3rem', fontFamily:'Cardo' }}>
            From Quarry to <br/> Bathroom
          </h1>
          <p className="mt-8 text-lg font-arial" style={{ fontSize: '.90rem', fontFamily:'Cardo' }}>
            Transform Your Bathroom into a Luxurious Retreat with our <br /> 
            Stunning Washbasins.<br />  
            Elevate your space with Modern Designs and <br /> 
            Create a Captivating Look.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src="/banner-img.png"
            alt="Banner"
            width={400}
            height={550}
            style={{ height: '550px' }} 
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* <Collections /> */}
      <ProductList />
      <FeaturedSection />
      <Testimonial/>
    </>
  );
}

export const dynamic = "force-dynamic";
