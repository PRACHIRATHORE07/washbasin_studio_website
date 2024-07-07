import React from 'react'; 
// import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import FeaturedSection from "@/components/FeaturedSection";
import Testimonial from "@/components/Testimonial";
import Banner from '@/components/Banner';


export default function Home() {
  return (
    <>
      <Banner/>
      <ProductList />
      <FeaturedSection />
      <Testimonial/>
    </>
  );
}

export const dynamic = "force-dynamic";
