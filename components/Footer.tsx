"use client";

// components/Footer.js
import Image from 'next/image';
import { useEffect, useState } from 'react';


const Footer = () => {

    const [footerHeight, setFooterHeight] = useState(250); // Default height for other devices

    useEffect(() => {
        function updateFooterHeight() {
          // Check the screen width to determine the height
          if (window.innerWidth >= 1024) { // Example breakpoint for desktop
            setFooterHeight(200); // Height for desktop
          } else {
            setFooterHeight(300); // Height for mobile (adjust as needed)
          }
        }

    // Initial call to set height on component mount
    updateFooterHeight();

    // Event listener for window resize
    window.addEventListener('resize', updateFooterHeight);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', updateFooterHeight);
  }, []);

    
  return (

    <footer className="bg-black flex items-center justify-between px-6 mt-10" style={{ height: `${footerHeight}px` }}>

      <div className="flex flex-col items-start ml-10 max-sm:px-2 max-lg:hidden">
        <Image src="/logo.png" alt="Logo" width={200} height={150} />
        <span className="text-white mt-2">Made in India</span>
      </div>
      <div className="flex flex-col items-start pr-16 max-sm:px-2 max-lg:hidden">
        <div className="flex space-x-12 mb-2 px-5">
          <Image src="/instagram.png" alt="Instagram" width={20} height={20}/>
          <Image src="/facebook.png" alt="Facebook" width={20} height={20}/>
          <Image src="/whatsapp.png" alt="WhatsApp" width={20} height={20}/>
          <Image src="/gmail.png" alt="Gmail" width={20} height={20}/>
        </div>
        <div className="text-white px-6">
          <a href='/' className="mr-1 h-[15px]">Terms of Use</a>/
          <a href='/' className="ml-1 h-[15px]">Privacy Policy</a>
        </div>
      </div>

{/*mobile*/}

      <div className="flex flex-col items-center lg:hidden w-[100%] mt-10">
   
        <Image src="/logo.png" alt="Logo" width={200} height={150} />
 
        <span className="text-white mt-2">Made in India</span>

        <div className="flex space-x-8 mb-2 px-5 mt-10">
          <Image src="/instagram.png" alt="Instagram" width={24} height={24}/>
          <Image src="/facebook.png" alt="Facebook" width={24} height={24}/>
          <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24}/>
          <Image src="/gmail.png" alt="Gmail" width={24} height={24}/>
        </div>
        <div className="text-white px-6 mt-3 mb-10">
          <a href='/' className="mr-1 h-[15px]">Terms of Use</a>/
          <a href='/' className="ml-1 h-[15px]">Privacy Policy</a>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;