
import React from 'react'; 
import ProductList from "@/components/ProductList";
import Collections from "@/components/Collections";
import FeaturedSection from "@/components/FeaturedSection";
import Testimonial from "@/components/Testimonial";
import Banner from '@/components/Banner';


export default function Home() {
  return (
    <>
      <Banner/>
      <ProductList />
      <Collections />
      <FeaturedSection />
      <Testimonial/>
    </>
  );
}

export const dynamic = "force-dynamic";
