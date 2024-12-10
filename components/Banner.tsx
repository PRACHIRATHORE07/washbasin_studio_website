import Image from 'next/image';
import styles from './HomeImprovement.module.css';
import { Josefin_Sans } from "next/font/google";



const Banner = () => {

  return (
<div className="relative flex items-center justify-center" style={{ height: '87vh', width: '100%' }}>
  <div className="relative flex" style={{ width: '90%', height: '100%', borderRadius: '25px', overflow: 'hidden', margin: '0 auto', background: 'rgba(255, 255, 255, 0.05)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: 'inset 0 75px 75px rgba(165, 165, 165, 0.1), inset 0 -75px 75px rgba(165, 165, 165, 0.1)' }}>
    <div style={{ borderRadius: '25px', width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
    

    <div className="absolute z-10 text-left p-4" style={{ top: '8%', left: '57%', width: 'auto', height: 'auto', display: 'flex', alignItems: 'center' }}>
        <Image
          src="/Stripe-banner.png"
          alt=""
          width={700}  // Replace with your desired width
          height={700}  // Replace with your desired height
          objectFit="cover"
          style = {{ filter: 'blur(70px)' }}
        />
      </div>

      <div className="absolute z-10 text-left p-4" style={{ top: '8%', left: '57%', width: 'auto', height: 'auto', display: 'flex', alignItems: 'center' }}>
        <Image
          src="/Stripe-banner.png"
          alt="Banner-stripe"
          width={700}  // Replace with your desired width
          height={700}  // Replace with your desired height
          objectFit="cover"
        />
      </div>
      <div className="absolute z-10 text-left p-4" style={{ top: '16%', left: '60%', width: '600px', height: '600px', borderRadius: '25px', display: 'flex', alignItems: 'center' }}>
        <Image
          src="/banner-img.png"
          alt=""
          width={655}  // Replace with your desired width
          height={655}  // Replace with your desired height
          objectFit="cover"
          style={{ borderRadius: '50%', filter: 'blur(60px)' }}
        />
      </div>
      <div className="absolute z-10 text-left p-4" style={{ top: '16%', left: '60%', width: '600px', height: '600px', borderRadius: '25px', display: 'flex', alignItems: 'center' }}>
        <Image
          src="/banner-img.png"
          alt="Banner-img"
          width={650}  // Replace with your desired width
          height={650}  // Replace with your desired height
          objectFit="cover"
          style={{ borderRadius: '50%' }}
        />
      </div>
      </div>
      </div>



      <div className="absolute z-10 text-left p-4" style={{ top: '10%', left: '8%', width: '90%', height: 'auto', borderRadius: '25px' }}>
        <div className="text-white">
          <h1 className="text-4xl font-bold leading-tight" style={{ fontSize: '5rem', fontFamily: 'Josefin Sans', fontWeight: '1000' }}>
            THE WASHBASIN <br /> STUDIO
          </h1>

          <div className={styles.homeImprovement}>
            HOME IMPROVEMENT
          </div>

          <p className="mt-8 text-lg font-arial" style={{ fontSize: '.90rem', fontFamily: 'Cardo' }}>
            Transform Your Bathroom into a Luxurious Retreat with our <br />
            Stunning Washbasins.<br />
            Elevate your space with Modern Designs and <br />
            Create a Captivating Look.
          </p>
        </div>
        
      </div>

    </div>
    
  );
};

export default Banner;
