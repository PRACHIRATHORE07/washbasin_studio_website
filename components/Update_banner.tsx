import styles from './Banner.module.css'; // Import the updated CSS module

const Banner = () => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.overlayRectangle}>
                <h1 className={styles.titleText}>THE<br/>WASHBASIN<br/>STUDIO</h1>
                <h2 className={styles.subtitleText}>Immerse Yourself in Luxury</h2>
                <p className={styles.descriptionText}>Discover our exclusive range of<br/>handcrafted marble washbasins</p>
            </div>
        </div>
    );
};

export default Banner;
