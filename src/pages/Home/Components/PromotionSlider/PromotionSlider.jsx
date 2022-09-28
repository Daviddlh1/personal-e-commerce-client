import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import image1 from '../../../../assets/PromtionSliderImages/Screen Shot 2022-09-11 at 1.31.38 PM.png'
import image2 from '../../../../assets/PromtionSliderImages/Screen Shot 2022-09-27 at 7.51.27 PM.png'
import image3 from '../../../../assets/PromtionSliderImages/Screen Shot 2022-09-27 at 7.51.33 PM.png'
import image4 from '../../../../assets/PromtionSliderImages/Screen Shot 2022-09-27 at 7.51.44 PM.png'
import styles from './PromotionSlider.module.css'

const dataSet = [image1, image2, image3, image4]

function PromotionsSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(1)
    const [animate, setAnimate] = useState(true)
    const [hover, setHover] = useState({opacity: 0, transition: "opacity ease-in-out 0.4s"})

    const nextImage = () => {
        if(currentImageIndex < (dataSet.length - 1)){
            setAnimate(false)
            setTimeout(() => {
                setCurrentImageIndex(currentImageIndex + 1)
                setAnimate(true)
            }, 400)

        }else{
            setAnimate(false)
            setTimeout(() => {
                setCurrentImageIndex(0)
                setAnimate(true)
            }, 400)
        }
    }

    const previousImage = () => {
        if(currentImageIndex > 0) {
            setAnimate(false)
            setTimeout(() => {
                setCurrentImageIndex(currentImageIndex - 1)
                setAnimate(true)
            }, 400)
        }else{
            setAnimate(false)
            setTimeout(() => {
                setCurrentImageIndex(dataSet.length - 1)
                setAnimate(true)
            }, 400)
        }
    }

    return dataSet.length && (
        <div className={styles.containerSlider}
        onMouseEnter={() => setHover({...hover, opacity: 1})}
        onMouseLeave={() => setHover({...hover, opacity: 0})}
        >
            <div
            className={animate ? `${styles.slide} ${styles.activeAnim}`: styles.slide}>
            <img src={dataSet[currentImageIndex]} alt="testImages" />
            </div>
            <button style={hover} className={`${styles.buttons} ${styles.leftButton}`} onClick={previousImage} >
                <FontAwesomeIcon icon={faAngleLeft} size="xl"/>
            </button>
            <button style={hover} className={`${styles.buttons} ${styles.rightButton}`} onClick={nextImage} >
            <FontAwesomeIcon icon={faAngleRight} size="xl"/>
            </button>
        </div>
        
    )
}

export default PromotionsSlider