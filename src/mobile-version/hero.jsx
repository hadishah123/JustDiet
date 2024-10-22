import Slider from './sliderMob'
import styles from './hero.module.css'

export default function HeroSlider(){
    return <>
        <img src="\assets\hero-mobile.webp" alt="hero BG" className={styles.HeroBG}/>
        <img src="\assets\heroBowl.webp" alt="Hero Bowl" className={styles.heroBowl}/>
        {/* <Slider/> */}
    </>
}