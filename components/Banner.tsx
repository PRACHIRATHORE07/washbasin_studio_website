import Image from 'next/image';
import styles from './HomeImprovement.module.css';
import { Josefin_Sans } from "next/font/google";

const Banner = () => {
  return (
    <div className={`${styles.bannerWrapper} relative flex items-center justify-center`}>
      <div className={`${styles.bannerContainer} relative flex`}>
        <div className={styles.innerContainer}>
          <div className={`${styles.imageWrapper} absolute z-10`}>
            <Image
              src="/Stripe-banner.png"
              alt="Banner-stripe"
              layout="responsive"
              width={1000}
              height={1000}
              objectFit="cover"
              className={styles.stripeBannerImage}
            />
          </div>
        </div>
      </div>
      
      <div className={`${styles.responsiveImageContainer} absolute z-10`}>
        <img
          src="/banner-img.png"
          alt="Banner"
          className={styles.responsiveImage}
        />
      </div>

      <div className={`${styles.textContainer} absolute z-10`}>
        <div className="text-white">
          <div className={styles.textWashbasin}>WASHBASIN</div>
          <div className={styles.textStudio}>STUDIO</div>
          <div className={styles.homeImprovement}>
            <h1>HOME IMPROVEMENT</h1>
          </div>
          <div className={styles.textDescription}>
            <p>Transform Your Bathroom with Luxurious Washbasins. Elevate your space with modern washbasin designs and create a captivating, luxurious look.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
