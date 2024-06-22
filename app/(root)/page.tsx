import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center mt-4" style={{ height: '400px' }}>
        <div className="w-1/2 p-4 text-white">
          <h1 style={{ fontSize: '3rem' }} className="font-bold">From Quarry to Bathroom</h1>
          <p className="mt-8 text-xl">
            Transform Your Bathroom into a Luxurious Retreat with our <br /> 
            Stunning Washbasins.<br />  
            Elevate your space with Modern Designs and <br /> 
            Create a Captivating Look.
          </p>
        </div>
        <div className="w-1/2" >
          <Image
            src="/banner-img.png"
            alt="Banner"
            width={400} // Adjust width to fit the design
            height={200} // Adjust height to fit the design
            style={{ height: '550px' }}
            className="w-full h-auto"
          />
        </div>
      </div>
      <Collections />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";
