import styles from './slider.module.css'; 

export default function Slider() {
  return (
    // <div className={styles.heroBgSlider}>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          <img
            src="\assets\hero-bg-sliderD.webp"
            alt="Hero BG"
            className={styles.sliderImage}
          />
          {/* <img
            src="\assets\hero-bg-sliderD.webp"
            alt="Hero BG"
            className={styles.sliderImage}
          />
          <img
            src="\assets\hero-bg-sliderD.webp"
            alt="Hero BG"
            className={styles.sliderImage}
          />
          <img
            src="\assets\hero-bg-sliderD.webp"
            alt="Hero BG"
            className={styles.sliderImage}
          />
          <img
            src="\assets\hero-bg-sliderD.webp"
            alt="Hero BG"
            className={styles.sliderImage}
          /> */}
        </div>
        <div className={styles.slider}>
          <img
            src="\assets\hero-bg-sliderF.webp"
            alt="Hero BG"
            className={styles.sliderImageF}
          />
          {/* <img
            src="\assets\hero-bg-sliderF.webp"
            alt="Hero BG"
            className={styles.sliderImageF}
          />
          <img
            src="\assets\hero-bg-sliderF.webp"
            alt="Hero BG"
            className={styles.sliderImageF}
          />
          <img
            src="\assets\hero-bg-sliderF.webp"
            alt="Hero BG"
            className={styles.sliderImageF}
          />
          <img
            src="\assets\hero-bg-sliderF.webp"
            alt="Hero BG"
            className={styles.sliderImageF}
          /> */}
        </div>
      </div>
    // </div>
  );
}
